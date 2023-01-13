const pool = require("../../config/db");
const queries = require("./queries");

const getExpense = (req, res) => {
    pool.query(queries.getData)
        .then(result=>{
            return res.status(200).json(result.rows)
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                    message:'System error can\'t get data !'
            })
        })  
};

const sumExpense = (req, res) => {
    pool.query(queries.sumExpense)
        .then(result=>{
            return res.status(200).json(result.rows[0])
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                    message:'System error can\'t get data !'
            })
        })  
};

const insertExpense = (req, res) => {
    const {title, amount} = req.body
    
    pool.query(queries.insertData, [title, parseInt(amount)])
        .then(result=>{
            return res.status(200).json({
                message:'Insert data success !'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                    message:'System error can\'t insert data !'
            })
        })  
};

const updateExpense = (req, res) => {
    const {id, title, amount} = req.body
    
    pool.query(queries.updateData, [title, parseInt(amount), parseInt(id)])
        .then(result=>{
            return res.status(200).json({
                message:'update data success !'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                    message:'System error can\'t update data !'
            })
        })  
};

const deleteExpense = (req, res) => {
    const {id} = req.params
    
    pool.query(queries.deleteData, [parseInt(id)])
        .then(result=>{
            return res.status(200).json({
                message:'delete data success !'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                    message:'System error can\'t delete data !'
            })
        })  
};

module.exports = {
    getExpense,
    insertExpense,
    updateExpense,
    deleteExpense,
    sumExpense
}