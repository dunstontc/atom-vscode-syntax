/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const fs = require('fs');
const path = require('path');
const { CompositeDisposable } = require('atom');

class vscSyntax {
  constructor() {
    this.createSelectListView = this.createSelectListView.bind(this);
  }

  static initClass() {

    this.prototype.config = require('./vsc-syntax-settings').config;
  }

  activate() {
    this.disposables = new CompositeDisposable;
    this.packageName = require('../package.json').name;
    this.disposables.add(atom.config.observe(`${this.packageName}.scheme`, () => this.enableConfigTheme()));
    return this.disposables.add(atom.commands.add('atom-workspace', `${this.packageName}:select-theme`, this.createSelectListView));
  }

  deactivate() {
    return this.disposables.dispose();
  }

  enableConfigTheme() {
    const scheme = atom.config.get(`${this.packageName}.scheme`);
    return this.enableTheme(scheme);
  }

  enableTheme(scheme) {
    // No need to enable the theme if it is already active.
    if (!this.isPreviewConfirmed) { if (this.isActiveTheme(scheme)) { return; } }
    try {
      // Write the requested theme to the `syntax-variables` file.
      fs.writeFileSync(this.getThemePath(), this.getThemeContent(scheme));
      const activePackages = atom.packages.getActivePackages();
      if ((activePackages.length === 0) || this.isPreview) {
        // Reload own stylesheets to apply the requested theme.
        atom.packages.getLoadedPackage(`${this.packageName}`).reloadStylesheets();
      } else {
        // Reload the stylesheets of all packages to apply the requested theme.
        for (let activePackage of Array.from(activePackages)) { activePackage.reloadStylesheets(); }
      }
      return this.activeScheme = scheme;
    } catch (error) {
      // If unsuccessfull enable the default theme.
      return this.enableDefaultTheme();
    }
  }

  isActiveTheme(scheme) {
    return scheme === this.activeScheme;
  }

  getThemePath() {
    return path.join(__dirname, "..", "styles", "theme.less");
  }

  getThemeContent(scheme) {
    return `\
@vsc-syntax: './themes/${this.getNormalizedName(scheme)}';

@import '@{vsc-syntax}';
\
`;
  }

  getNormalizedName(name) {
    return `${name}`
      .replace(' ', '-')
      .toLowerCase();
  }

  enableDefaultTheme() {
    const scheme = atom.config.getDefault(`${this.packageName}.scheme`);
    return this.setThemeConfig(scheme);
  }

  setThemeConfig(scheme) {
    return atom.config.set(`${this.packageName}.scheme`, scheme);
  }

  createSelectListView() {
    let VSCSyntaxSelectListView = require('./vsc-syntax-select-list-view');
    VSCSyntaxSelectListView = new VSCSyntaxSelectListView(this);
    return VSCSyntaxSelectListView.attach();
  }

  isConfigTheme(scheme) {
    const configScheme = atom.config.get(`${this.packageName}.scheme`);
    return scheme === configScheme;
  }
}
vscSyntax.initClass();

module.exports = new vscSyntax;
