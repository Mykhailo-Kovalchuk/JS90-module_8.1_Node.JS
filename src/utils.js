function add (value1, value2) {
    console.log(`Sum: ${value1 + value2}`)
};


function minus (value1, value2) {
    console.log(`Minus: ${value1 - value2}`)
};


// named-Export
export { add, minus }; 
//---------------------------------------------------------

function divide(value1, value2) {
    console.log(`Divide: ${value1 / value2}`)
}
// export default - експорт за дефолтом може бути лише один. 
// Також імпортується трохи по-іншому, а саме в імпорті можемо задати будь-яке інше ім`я, 
// оскільки дефолтний експорт-імпорт лмше один, то імпорт і так знайде те що ми експортуємо по дефолту, 
// бо все решта буде експортуватись за ім`ям (named-export). 
export default divide

// Можна експорт писати одразу перед функцією - 
// працює так само, але скорочує код 
// export default function divide(value1, value2) {
//     console.log(`Divide: ${value1 / value2}`)
// }

// ----------------------------

// експорт імпорт класів 

export class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

export function printName (user) {
    console.log(`User Name is: ${user.name}`)
};

export function printAge (user) {
    console.log(`User age is: ${user.age}`)
}

// export {User, printName, printAge}