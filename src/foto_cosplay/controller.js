const pool = require("../../config/db");
const queries = require("./queries");
// const base64Img = require("base64-img")

const getCosplay = (req, res) => {
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

const getCosplayById = (req, res) => {
    const {id} = req.params
    
    pool.query(queries.getCosplayById, [parseInt(id)])
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

const insertCosplay = (req, res) => {
    const {jenis_cosplay, gambar_cosplay, fasilitas, harga} = req.body
    // base64Img.img(gambar_cosplay)
    console.log(gambar_cosplay)
    // res.status(200).json({gambar: jenis_cosplay})
    // base64Img.img(gambar_cosplay, '../public', Date.now(), (err, filePath) => {
    //     const pathArr = filePath.split('/')
    //     const fileName = pathArr[pathArr.length - 1]

    //     res.status(200).json({
    //         message:'Insert data success !',
    //         url: `http://127.0.0.1:3000/${fileName}`
    //     })
    // })


    pool.query(queries.insertData, [jenis_cosplay, gambar_cosplay, fasilitas, harga])
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

const updateCosplay = (req, res) => {
    const {jenis_cosplay, gambar_cosplay, fasilitas, harga} = req.body
    
    pool.query(queries.updateData, [jenis_cosplay, gambar_cosplay, fasilitas, harga, req.params.id])
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

const deleteCosplay = (req, res) => {
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
    getCosplay,
    insertCosplay,
    updateCosplay,
    deleteCosplay,
    getCosplayById
}