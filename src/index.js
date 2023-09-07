// node -v - перевірити версію Node (якщо node.js не встановлений тоді не покажe)
// git remote -v - 
// git remote set-url origin посилання - скопіює дані в наш репозиторій (або той що буде на місці "посилання")
// npm instal - 
// npm start - 
// git status - покаже статус на шого репозиторію. 
// git add . - додасть оновлені (зменені нами дані, результат роботи) до репозиторію
// git commit -m "Initial commit" - запише наші дані і назве цей коміт "Initial commit"
// git push - залиє це все до нашого репозиторію на гідХаб.  


// git add . & git commit -m "Initial commit"
// Можна замінити на git commit -am "Initial commit"

// named-Import
import { add, minus } from './utils.js' 
add (10, 15);
minus (40, 5);
// default - import
import divideFunction from './utils.js'
divideFunction (25, 5);

// import Class

import { User, printName, printAge } from './utils.js'

const user1 = new User ('Mike', 39);
const user2 = new User ('Ann', 30);

console.log(user1);
console.log(user2);

printName(user2);
//print(); // цікаво - це вбудована функція і вона пропонує щось розрукувати.

printAge(user1);


// При імпорті можна змінити назву функції і в місці де ми працюємо
// з імпортом ми можемо викликати її за новим ім`ям, робимо це так
// import { add as addFunction, minus as minusNewNameFuction } from './utils.js'
// addFunction (10, 15);
// minusNewNameFuction (40, 5);

//---------------------------------------------------------------------

// import всього через зірочку *

import * as allExports from './utils.js'
console.log(allExports);
// можна одразу деструктиризувати
// const { minus, default: divide } = allExports;
// minus (10, 5);
// divide (10, 5);