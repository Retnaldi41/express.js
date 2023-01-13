const pool = require("../../config/db");
const queries = require("./queries");

const getAgenda = (req, res) => {
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

const getAgendaById = (req, res) => {
    const {id} = req.params
    
    pool.query(queries.getAgendaById, [parseInt(id)])
        .then(result=>{
            return res.status(200).json(result.rows)
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                    message:'System error can\'t delete data !'
            })
        })  
};

const insertAgenda = (req, res) => {

    const {nama_agenda, tanggal_agenda} = req.body
    
    pool.query(queries.insertData, [nama_agenda, tanggal_agenda])
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

const updateAgenda = (req, res) => {
    const {nama_agenda, tanggal_agenda, id_agenda} = req.body
    
    pool.query(queries.updateData, [nama_agenda, tanggal_agenda, id_agenda])
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

const deleteAgenda = (req, res) => {
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
    getAgenda,
    insertAgenda,
    updateAgenda,
    deleteAgenda,
    getAgendaById
}