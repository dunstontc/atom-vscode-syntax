
const ex = require('./another-file');

import { SelectListView } from 'atom-select-list';

export default thing = 'empty';

var funky = function () {
    let sumtin = Math.floor(8 / 1);
    console.log('funky');
}

let superFunk = (something) => console.log(something);

let example = function () {
    let hurrah = [1, 3, 'seven'];
    if(true) {
        for (item of hurrah) {
            console.log(item);
        };
    }
}

let claysObject = {
    float:              23.23,
    boolean:            false,
    string:             'here\'s a string',
    templateLiteral:    `This template is ${idk} literal`,
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
