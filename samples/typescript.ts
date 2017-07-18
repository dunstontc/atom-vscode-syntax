let nombre: string = 'Clay';
let age: number = 23;
let interests: string[] = ['Netflix', 'Street Fighter', 'Syntax Highlighting'];

class Person {

    public firstName: string;
    public age: number;
    public interests: string[];

    constructor(name: string, age: number, interests: string[]) {
        this.firstName = name;
        this.age = age;
        this.interests = interests;
    }

    intro() {
        return (`
            Hi I'm ${this.firstName} and I'm ${this.age} years old.
            Here are some things I enjoy: ${this.interests}.
        `)
    }
}

let clay = new Person(nombre, age, interests);
clay.intro();

// Generics
function identity<T>(arg: T): T {
    return arg;
}

// Interfaces
interface enterFace {
    [propfirstName: string]: any;
}

// =============================================================================

type NameOrNameArray = string | string[];

function createName(name: NameOrNameArray) {
    if (typeof name === "string") {
        return name;
    }
    else {
        return name.join(" ");
    }
}
var greetingMessage = `Greetings, ${ createName(["Sam", "Smith"]) }`;
alert(greetingMessage);
