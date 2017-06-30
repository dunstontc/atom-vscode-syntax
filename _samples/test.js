const roko = require('');
import { SelectListView, other } from 'atom-select-list';
export default thing = 'empty'; // TODO: find type of default

var funky = function () {
    let sumtin = Math.floor(8 / 1);
    console.log('funky');
}

let superFunk = (something) => console.log(something);

let hurrah = [1, 3, 'seven', debugger];

let example = function () {
    if(true){
        for (number of ten) {
            console.log(number);
        };
        for (x=0; x<10; x++) {};
    }
}

let claysObject = {
    float:              23.23,
    boolean:            false,
    string:             'here\'s a string',
    templateLiteral:    `This template is ${idk} literal`,
    symbol:             symbolic,
    regexp:             new RegExp( /\.jsx$/ ),
}

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

let fourCorners = new Square(4);
let four = fourCorners.height;
