/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const { SelectListView } = require('atom-space-pen-views');

class VSCSyntaxSelectListView extends SelectListView {

  initialize(vsc) {
    this.vsc = vsc;
    super.initialize(...arguments);
    this.list.addClass('mark-active');
    return this.setItems(this.getThemes());
  }

  viewForItem(theme) {
    const element = document.createElement('li');
    if (this.vsc.isConfigTheme(theme.scheme)) {
      element.classList.add('active');
    }
    element.textContent = theme.name;
    return element;
  }

  getFilterKey() {
    return 'name';
  }

  selectItemView(view) {
    super.selectItemView(...arguments);
    const theme = this.getSelectedItem();
    this.vsc.isPreview = true;
    if (this.attached) { return this.vsc.enableTheme(theme.scheme); }
  }

  confirmed(theme) {
    this.confirming = true;
    this.vsc.isPreview = false;
    this.vsc.isPreviewConfirmed = true;
    this.vsc.setThemeConfig(theme.scheme);
    this.cancel();
    return this.vsc = false;
  }

  cancel() {
    super.cancel(...arguments);
    if (!this.confirming) { this.vsc.enableConfigTheme(); }
    this.vsc.isPreview = false;
    return this.vsc.isPreviewConfirmed = false;
  }

  cancelled() {
    return (this.panel != null ? this.panel.destroy() : undefined);
  }

  attach() {
    if (this.panel == null) { this.panel = atom.workspace.addModalPanel({item: this}); }
    this.selectItemView(this.list.find('li:last'));
    this.selectItemView(this.list.find('.active'));
    this.focusFilterEditor();
    return this.attached = true;
  }

  getThemes() {
    const schemes = atom.config.getSchema(`${this.vsc.packageName}.scheme`).enum;
    const themes = [];
    schemes.forEach(scheme => themes.push({scheme, name: `${scheme}`}));
    return themes;
  }
}

module.exports = VSCSyntaxSelectListView;
