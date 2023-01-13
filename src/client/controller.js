const pool = require("../../config/db");
const queries = require("./queries");

const getClient = (req, res) => {
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

const getClientById = (req, res) => {
    const {id} = req.params
    
    pool.query(queries.getClientById, [parseInt(id)])
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

const insertClient = (req, res) => {
    const {nama_client, tempat_client, jenis_foto, tanggal, link_file, total_biaya} = req.body
    
    pool.query(queries.insertData, [nama_client, tempat_client, jenis_foto, tanggal, link_file, total_biaya])
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

const updateClient = (req, res) => {
    const {nama_client, tempat_client, jenis_foto, tanggal, link_file, total_biaya} = req.body
    
    pool.query(queries.updateData, [nama_client, tempat_client, jenis_foto, tanggal, link_file, total_biaya, req.params.id])
        .then(result=>{
            return res.status(200).json({
                message:'update data success !'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                    message:'System error can\'t update data !' + e
            })
        })  
};

const deleteClient = (req, res) => {
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
    getClient,
    insertClient,
    updateClient,
    deleteClient,
    getClientById
}