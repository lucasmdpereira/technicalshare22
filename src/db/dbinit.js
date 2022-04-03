const sqlite3 = require('sqlite3').verbose();
const path = require('path')

let sql;

const db = new sqlite3.Database(path.join(__dirname, 'users.db'), sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
} )

sql = `CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    email text NOT NULL UNIQUE,
    password text NOT NULL,
    name text UNIQUE,
    alias text 
)`
db.run(sql); //como fazer await async?

const campos = 4 
let names = ['Pedro Ayuda', 'Juninho Jr.', 'Alf Deet', 'Roberta Hermes', 'Michael Scott'];
let emails = ['pedro@ayuda', 'juninho@jr', 'alf@deet', 'roberta@hermes', 'michael@scott'];
let password = ['pedro', 'juninho', 'alf', 'roberta', 'michael'];
let alias = ['Entusiasta em educação', 'Iniciante', 'migrante', 'Profissional do RH', 'Workaholic'];

for (let i = 0; i < 4; i++){
    sql = `INSERT INTO users(name, email, password, alias) VALUES (?,?,?,?)`
    db.run(sql,[names[i],emails[i],password[i],alias[i]])
}
