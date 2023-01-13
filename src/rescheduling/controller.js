const pool = require("../../config/db");
const queries = require("./queries");

const getRescheduling = (req, res) => {
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

const insertRescheduling = (req, res) => {
    const {nama_rescheduling, tanggal_booking, tanggal_ganti, status, persetujuan} = req.body
    
    pool.query(queries.insertData, [nama_rescheduling, tanggal_booking, tanggal_ganti, status, persetujuan])
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

const updateRescheduling = (req, res) => {
    const {nama_rescheduling, tanggal_booking, tanggal_ganti, persetujuan, status, id_rescheduling} = req.body
    
    pool.query(queries.updateData, [nama_rescheduling, tanggal_booking, tanggal_ganti, persetujuan, status, id_rescheduling])
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

const deleteRescheduling = (req, res) => {
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

const updateStatus = (req, res) => {
    const {status, id_rescheduling} = req.body
    
    pool.query(queries.updateStatus, [status, id_rescheduling])
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

const getReschedulingById = (req, res) => {
    const {id} = req.params
    
    pool.query(queries.getReschedulingById, [parseInt(id)])
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


module.exports = {
    getRescheduling,
    insertRescheduling,
    updateRescheduling,
    deleteRescheduling,
    getReschedulingById,
    updateStatus,
}