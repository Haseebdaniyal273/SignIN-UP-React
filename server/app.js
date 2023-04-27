const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
///////////////////////////
const cors = require('cors')
/////////////////////////
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: false}))
 
app.use(bodyParser.json())
///////////////////////////
app.use(cors())
//////////////////////////

//mysql


const pool = mysql.createPool({

connectionLimit : 10,
host: 'localhost',
user : 'root',
password : '',
database : 'management'
});

//get all managementusers
app.get('',(req,res)=>{

pool.getConnection((err,connection) => {
if (err) throw err
console.log('connection as it ${connection.threadId}')

connection.query('SELECT * from users' , (err, rows)=> {
connection.release() //return conn to pool

if(!err){
    res.send(rows)
}else{

    console.log(err)
}
    
})

})


})

//get a managementusers by id
app.get('/:id',(req,res)=>{

    pool.getConnection((err,connection) => {
    if (err) throw err
    console.log('connection as it ${connection.threadId}')
    
    connection.query('SELECT * from users WHERE id = ?' ,[req.params.id], (err, rows)=> {
    connection.release() //return conn to pool
    
    if(!err){
        res.send(rows)
    }else{
    
        console.log(err)
    }
        
    })
    
    })
    
    
    })
    
    
//Delete a managementusers record by id
app.delete('/:id',(req,res)=>{

    pool.getConnection((err,connection) => {
    if (err) throw err
    console.log('connection as it ${connection.threadId}')
    
    connection.query('DELETE from users WHERE id = ?' ,[req.params.id], (err, rows)=> {
    connection.release() //return conn to pool
    
    if(!err){
        res.send('codemon with the record id ${[req.params.id]} has been removed ')
    }else{
    
        console.log(err)
    }
        
    })
    
    })
    
    
    })
    
    
    
//Add a managementusers record by id
app.post('',(req,res)=>{

    pool.getConnection((err,connection) => {
    if (err) throw err
    console.log('connection as it ${connection.threadId}')
    
    const params = req.body

    connection.query('INSERT INTO users SET ?' ,params, (err, rows)=> {
    connection.release() //return conn to pool
    
    if(!err){
        res.send('codemon with the record id ${[req.params.id]} has been added')
    }else{
    
        console.log(err)
    }
        
    })
    
    })
    
    
    })
    
      
//Update a managementusers record by id
app.put('',(req,res)=>{

    pool.getConnection((err,connection) => {
    if (err) throw err
    console.log('connection as it ${connection.threadId}')
    
    const {id, name, tagline , description , image} = req.body

    connection.query('UPDATE users SET name = ?, tagline = ? ,description = ? , image = ? WHERE id = ? ' ,[name, tagline, description , image, id], (err, rows)=> {
    connection.release() //return conn to pool
    
    if(!err){
        res.send('codemon with the record id ${name} has been updated')
    }else{
    
        console.log(err)
    }
        
    })
    console.log(req.body)
    })
    
    
    })
app.listen(port, ()=> console.log('Listen to port ${port}'))

