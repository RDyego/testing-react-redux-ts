import * as React from 'react';

class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public getName() {
        return this._name;
    }
}

var person = new Person('R. Dyego');

export class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>Testing React + Typescript</h1>
                <h2>{person.getName()}</h2>
            </div>
        );
    }
}
