type Identity =  {
    name: string;
    age: number;
    isMajeur: boolean;
    hobbies: string[];
};

const identity1: Identity = {
    name: 'Jérôme',
    age: 27, 
    isMajeur: true,
    hobbies: [ 'Mountain', 'Music' ]
}

const a: number = 2;

console.log( typeof(identity1) );
console.log( typeof(a) );

console.log( identity1 );
console.log( a );
