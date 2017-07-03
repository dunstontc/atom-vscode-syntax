'use babel';

import PackagePickerView from './package-picker-view';
import { CompositeDisposable } from 'atom';

let availablePackages = atom.packages.getAvailablePackageNames();

export default {

  packagePickerView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.packagePickerView = new PackagePickerView(state.packagePickerViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.packagePickerView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'package-picker:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.packagePickerView.destroy();
  },

  serialize() {
    return {
      packagePickerViewState: this.packagePickerView.serialize()
    };
  },

  toggle() {
    console.log(`\n availablePackages: \n ${availablePackages} \n`);
    // console.log(`\n loadedPackages: \n ${loadedPackages} \n`);
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
