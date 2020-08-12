class UserProfile {
    constructor(public name: string, public age: number) { }
}

class AdvancedUserProfile extends UserProfile {
    constructor(name: string, age: number, public hobbies: string[], public color: string) {
        super(name, age);
    }
}

const user1 = new AdvancedUserProfile('Jérôme', 46, ['Rando', 'Musik'], 'red');
console.log(user1);