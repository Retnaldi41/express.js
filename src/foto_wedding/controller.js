const pool = require("../../config/db");
const queries = require("./queries");
// const base64Img = require("base64-img")

const getWedding = (req, res) => {
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

const getWeddingById = (req, res) => {
    const {id} = req.params
    
    pool.query(queries.getWeddingById, [parseInt(id)])
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

const insertWedding = (req, res) => {
    const {jenis_wedding, gambar_wedding, fasilitas, harga} = req.body

    console.log(gambar_wedding)

    pool.query(queries.insertData, [jenis_wedding, gambar_wedding, fasilitas, harga])
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

const updateWedding = (req, res) => {
    const {jenis_wedding, gambar_wedding, fasilitas, harga} = req.body
    
    pool.query(queries.updateData, [jenis_wedding, gambar_wedding, fasilitas, harga, req.params.id])
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

const deleteWedding = (req, res) => {
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
    getWedding,
    insertWedding,
    updateWedding,
    deleteWedding,
    getWeddingById
}