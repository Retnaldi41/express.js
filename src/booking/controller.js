const pool = require("../../config/db");
const queries = require("./queries");


const getBooking = (req, res) => {
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

const insertBooking = (req, res) => {
    const {id_user, jenis_booking, id_item, tanggal_booking, bukti_transfer, alasan, status} = req.body
    
    pool.query(queries.insertData, [id_user, jenis_booking, id_item, tanggal_booking, bukti_transfer, alasan, status])
        .then(result=>{
            console.log("berhasil backend")
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

const updateBooking = (req, res) => {
    const {id_user, jenis_booking, id_item, tanggal_booking, bukti_transfer, alasan, status, id_booking} = req.body
    
    pool.query(queries.updateData, [id_user, jenis_booking, id_item, tanggal_booking, bukti_transfer, alasan, status, id_booking])
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

const updateStatus = (req, res) => {
    const {status, id_booking} = req.body
    
    pool.query(queries.updateStatus, [status, id_booking])
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

const updatePembatalan = (req, res) => {
    const {status, id_booking, alasan} = req.body
    
    pool.query(queries.updatePembatalan, [status, id_booking, alasan])
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

const updateRescheduling = (req, res) => {
    const {tanggal_booking, status, id_booking} = req.body
    
    pool.query(queries.updateRescheduling, [tanggal_booking, status, id_booking])
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

const updateTransfer = (req, res) => {
    const {bukti_transfer, id_booking} = req.body
    
    pool.query(queries.updateTransfer, [bukti_transfer, id_booking])
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

const getBookingById = (req, res) => {
    const {id} = req.params
    
    pool.query(queries.getBookingById, [parseInt(id)])
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

const deleteBooking = (req, res) => {
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
    getBooking,
    insertBooking,
    updateBooking,
    deleteBooking,
    updateStatus,
    updateTransfer,
    updateRescheduling,
    updatePembatalan,
    getBookingById
}