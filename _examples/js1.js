'use babel';

import SelectListView from 'atom-select-list'

let packages = atom.packages.getAvailablePackageNames();
console.log(packages);

export default class PackagePickerView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('package-picker');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The PackagePicker is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
    console.log('removed');
  }

  getElement() {
    return this.element;
  }

}
