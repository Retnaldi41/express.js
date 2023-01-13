const pool = require("../../config/db");
const queries = require("./queries");

const getPotrait = (req, res) => {
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

const getPotraitById = (req, res) => {
    const {id} = req.params
    
    pool.query(queries.getPotraitById, [parseInt(id)])
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

const insertPotrait = (req, res) => {
    const {jenis_potrait, gambar_potrait, fasilitas, harga} = req.body

    console.log(gambar_potrait)    
    
    pool.query(queries.insertData, [jenis_potrait, gambar_potrait, fasilitas, harga])
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

const updatePotrait = (req, res) => {
    const {jenis_potrait, gambar_potrait, fasilitas, harga} = req.body
    
    pool.query(queries.updateData, [jenis_potrait, gambar_potrait, fasilitas, harga, req.params.id])
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

const deletePotrait = (req, res) => {
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
    getPotrait,
    insertPotrait,
    updatePotrait,
    deletePotrait,
    getPotraitById
}