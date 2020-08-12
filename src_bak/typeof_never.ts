let value = 30;
if ( typeof value == "number" ) console.log( 'Value est un nombre' );


type Id = {
    name: string;
    age: number;
}

const id1: Id = { name: 'Jérôme', age: 27 };

function foo( x: string|number ): boolean {
    if ( typeof x === "string" ) {
        return true;
    } else if ( typeof x === "number" ) {
        return false;
    }
    return fail( "Nop" );
}

function fail( message: string ): never {
    throw new Error( message );
}

foo( "toto" );
foo( "toto5" );
foo( "true" );
foo( 3 );
foo( 4 );
// foo( false );