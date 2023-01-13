const pool = require("../../config/db");
const queries = require("./queries");

const getPembatalan = (req, res) => {
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

const insertPembatalan = (req, res) => {
    const {alasan ,bukti_transfer_pembatalan} = req.body
    
    pool.query(queries.insertData, [alasan ,bukti_transfer_pembatalan])
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

const updatePembatalan = (req, res) => {
    const {alasan ,bukti_transfer_pembatalan, id_pembatalan} = req.body
    
    pool.query(queries.updateData, [alasan ,bukti_transfer_pembatalan, id_pembatalan])
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

const deletePembatalan = (req, res) => {
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
    getPembatalan,
    insertPembatalan,
    updatePembatalan,
    deletePembatalan
}