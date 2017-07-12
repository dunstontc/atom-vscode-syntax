{ SelectListView } = require 'atom-space-pen-views'

class VSCSyntaxSelectListView extends SelectListView

  initialize: (@vsc) ->
    super
    @list.addClass 'mark-active'
    @setItems @getThemes()

  viewForItem: (theme) ->
    element = document.createElement 'li'
    if @vsc.isConfigTheme theme.scheme
      element.classList.add 'active'
    element.textContent = theme.name
    element

  getFilterKey: ->
    'name'

  selectItemView: (view) ->
    super
    theme = @getSelectedItem()
    @vsc.isPreview = true
    @vsc.enableTheme theme.scheme if @attached

  confirmed: (theme) ->
    @confirming = true
    @vsc.isPreview = false
    @vsc.isPreviewConfirmed = true
    @vsc.setThemeConfig theme.scheme
    @cancel()
    @vsc = false

  cancel: ->
    super
    @vsc.enableConfigTheme() unless @confirming
    @vsc.isPreview = false
    @vsc.isPreviewConfirmed = false

  cancelled: ->
    @panel?.destroy()

  attach: ->
    @panel ?= atom.workspace.addModalPanel(item: this)
    @selectItemView @list.find 'li:last'
    @selectItemView @list.find '.active'
    @focusFilterEditor()
    @attached = true

  getThemes: ->
    schemes = atom.config.getSchema("#{@vsc.packageName}.scheme").enum
    themes = []
    schemes.forEach (scheme) ->
      themes.push scheme: scheme, name: "#{scheme}"
    themes

module.exports = VSCSyntaxSelectListView
