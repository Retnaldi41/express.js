const pool = require("../../config/db");
const queries = require("./queries");
// const base64Img = require("base64-img")

const getStudio = (req, res) => {
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

const getStudioById = (req, res) => {
    const {id} = req.params
    
    pool.query(queries.getStudioById, [parseInt(id)])
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

const insertStudio = (req, res) => {
    const {jenis_studio, gambar_studio, fasilitas, harga} = req.body

    console.log(gambar_studio)  

    pool.query(queries.insertData, [jenis_studio, gambar_studio, fasilitas, harga])
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

const updateStudio = (req, res) => {
    const {jenis_studio, gambar_studio, fasilitas, harga} = req.body
    
    pool.query(queries.updateData, [jenis_studio, gambar_studio, fasilitas, harga, req.parms.id])
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

const deleteStudio = (req, res) => {
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
    getStudio,
    insertStudio,
    updateStudio,
    deleteStudio,
    getStudioById
}