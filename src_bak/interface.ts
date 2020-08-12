interface IRepertory extends Array<number> {
    [index: number]: number;
}

const days: IRepertory = [ 1, 2, 3 ];

console.log( days );
days.push( 4 );
console.log( days );



interface IObject {
    [index: string]: any;
    // [index: number]: number;
    sayHello: { (name: string): void };
}

const myObject: IObject = {
    title: 'La poirâsse',
    age  : 46,
    7: 2.05, 
    sayHello: (name: string, age?: number): void => {
        console.log( `Hello ${name}, ${age} !`)
    }
}
myObject.sayHello( 'Jérôme');
console.log( myObject[7] );