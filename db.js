import mysql from 'mysql'

let connection = mysql.createConnection({
    host: "instance-696.c3c6wae6wjt0.us-east-2.rds.amazonaws.com",
    database:"db_696",
    user: "jonier",
    password: "12345678"
})

export function connect_SQL() {
    connection.connect(function(err){
        if(err){
            console.log(err)
        }
        else {
            console.log("Connected to the database")
        }
    })
}

export function insert_user(name, lastname, id) {
    let instruction_sql = "INSERT INTO users (id, name, lastname) VALUES ("+id+", '"+name+"', '"+lastname+"')"
    connection.query(instruction_sql, function(err, result) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("User added")
        }
    })
}
