/*
To start a new project
npm init -y
npm intsall better-sqlite3
*/

// 1. import database driver
const databasedriver = require('better-sqlite3');

// 2. Connect to the database
const db = databasedriver('bands.sqllite3');

/*
  Prepare a statement, execute statement
*/

// 3. Send our first query, prepare a statement
let statement = db.prepare('SELECT * FROM bands');

// 4. Execute statement, receive results
let results = statement.all();

// 5. Check the results
console.log(results);

// // 6. Using parameters
let statement2 = db.prepare(
    `SELECT * FROM bands WHERE genre = ?`
);

let results2 = statement2.all('Metal');

console.log(results2);

// Using named parameters
let statement3 = db.prepare(`
    SELECT * FROM bands WHERE genre = :genre
`);

let results3 = statement3.all({
    genre: 'Rock'
});

//console.log(results3);

let table = 'bands';
// Insert something into the database
let insertStatement = db.prepare(
    `INSERT INTO ${table} (name, genre) VALUES (:name, :genre)`
    );

    let resultOfinsert = insertStatement.run({
        name:'Bathory' ,
        genre: 'Metal'
    });

    console.log(resultOfinsert);