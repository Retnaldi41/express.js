const pool = require("../../config/db");
const queries = require("./queries");

const getGroup = (req, res) => {
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

const getGroupById = (req, res) => {
    const {id} = req.params
    
    pool.query(queries.getGroupById, [parseInt(id)])
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

const insertGroup = (req, res) => {
    const {jenis_group, gambar_group, fasilitas, harga} = req.body
   
    console.log(gambar_group)   
    
    pool.query(queries.insertData, [jenis_group, gambar_group, fasilitas, harga])
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

const updateGroup = (req, res) => {
    const {jenis_group, gambar_group, fasilitas, harga} = req.body
    
    pool.query(queries.updateData, [jenis_group, gambar_group, fasilitas, harga, req.params.id])
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

const deleteGroup = (req, res) => {
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
    getGroup,
    insertGroup,
    updateGroup,
    deleteGroup,
    getGroupById
}