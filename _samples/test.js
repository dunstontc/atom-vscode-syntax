'use strict';

const roko = require('');
import { SelectListView, other } from 'atom-select-list';
export default thing = 'empty';


var funky = function () {
    let sumtin = Math.floor(8 / 1); // TODO: Fix paren coloring
    console.log('funky');
}

const superFunk = () => console.log('super funky');

let ex = function(){
    if(true){
        console.log('true');
    }
}

hola = function () {
    let ten = 10;
    for (number of ten) {

    };
    for (x=0; x<10; x++) {

    }
}


let claysObject = {
    int:                23,
    float:              23.23,
    boolean:            true,  // TODO: boolean color: @blue_2
    string:             'here\'s a string',
    string2:            "here is another string",
    templateLiteral:    `This template is ${idk} literal`,
    symbol:             symbolic,
    regexp:             new RegExp( /\.jsx$/ ),
    array:              ['four', 'two', 'zero']
}

// TODO: class curly brackets
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}
