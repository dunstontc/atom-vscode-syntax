fs = require 'fs'
path = require 'path'
{CompositeDisposable} = require 'atom'

class vscSyntax

  config: require('./vsc-settings').config

  activate: ->
    @disposables = new CompositeDisposable
    @packageName = require('../package.json').name
    @disposables.add atom.config.observe "#{@packageName}.scheme", => @enableConfigTheme()
    @disposables.add atom.commands.add 'atom-workspace', "#{@packageName}:select-theme", @createSelectListView

  deactivate: ->
    @disposables.dispose()

  enableConfigTheme: ->
    scheme = atom.config.get "#{@packageName}.scheme"
    @enableTheme scheme

  enableTheme: (scheme) ->
    # No need to enable the theme if it is already active.
    return if @isActiveTheme scheme unless @isPreviewConfirmed
    try
      # Write the requested theme to the `syntax-variables` file.
      fs.writeFileSync @getThemePath(), @getThemeContent(scheme)
      activePackages = atom.packages.getActivePackages()
      if activePackages.length is 0 or @isPreview
        # Reload own stylesheets to apply the requested theme.
        atom.packages.getLoadedPackage("#{@packageName}").reloadStylesheets()
      else
        # Reload the stylesheets of all packages to apply the requested theme.
        activePackage.reloadStylesheets() for activePackage in activePackages
      @activeScheme = scheme
    catch
      # If unsuccessfull enable the default theme.
      @enableDefaultTheme()

  isActiveTheme: (scheme) ->
    scheme is @activeScheme

  getThemePath: ->
    path.join __dirname, "..", "styles", "theme.less"

  getThemeContent: (scheme) ->
    """
    @vsc-syntax: './themes/#{@getNormalizedName(scheme)}';

    @import '@{vsc-syntax}';

    """

  getNormalizedName: (name) ->
    "#{name}"
      .replace ' ', '-'
      .toLowerCase()

  enableDefaultTheme: ->
    scheme = atom.config.getDefault "#{@packageName}.scheme"
    @setThemeConfig scheme

  setThemeConfig: (scheme) ->
    atom.config.set "#{@packageName}.scheme", scheme

  createSelectListView: =>
    VSCSyntaxSelectListView = require './vsc-syntax-select-list-view'
    VSCSyntaxSelectListView = new VSCSyntaxSelectListView @
    VSCSyntaxSelectListView.attach()

  isConfigTheme: (scheme) ->
    configScheme = atom.config.get "#{@packageName}.scheme"
    scheme is configScheme

module.exports = new vscSyntax
