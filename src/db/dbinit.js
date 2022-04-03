const sqlite3 = require('sqlite3').verbose();
const { create } = require('domain');
const path = require('path')

createTables()

async function createTables(){
    let sql;
    const db = new sqlite3.Database(path.join(__dirname, 'users.db'), sqlite3.OPEN_READWRITE, (err) => {
        if (err) return console.error(err.message)
    } )
    
    sql = `CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        email text NOT NULL UNIQUE,
        password text NOT NULL,
        name text UNIQUE,
        alias text,
        tags text
    )`
    db.run(sql); //como fazer await async?
    
    
    let names = ['Pedro Ayuda', 'Juninho Jr.', 'Alf Deet', 'Roberta Hermes', 'Michael Scott'];
    let emails = ['pedro@ayuda', 'juninho@jr', 'alf@deet', 'roberta@hermes', 'michael@scott'];
    let password = ['pedro', 'juninho', 'alf', 'roberta', 'michael'];
    let alias = ['Entusiasta em educação', 'Iniciante', 'migrante', 'Profissional do RH', 'Workaholic'];
    let tags = ['#Node.js #Java #Spring','#HTML #CSS #JavaScript','#Scrum Master','#recrutamento #gestão','#Node.js #PO']
    const campos = 5 

    for (let i = 0; i < campos; i++){
        sql = `INSERT INTO users(name, email, password, alias, tags) VALUES (?,?,?,?,?)`
        db.run(sql,[names[i],emails[i],password[i],alias[i],tags[i]])
    }
}
