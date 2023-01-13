const pool = require("../../config/db");
const queries = require("./queries");

const getKomersial = (req, res) => {
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

const getKomersialById = (req, res) => {
    const {id} = req.params
    
    pool.query(queries.getKomersialById, [parseInt(id)])
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

const insertKomersial = (req, res) => {
    const {jenis_komersial, gambar_komersial, fasilitas, harga} = req.body
    // base64Img.img(gambar_komersial)
    console.log(gambar_komersial)
    // res.status(200).json({gambar: jenis_komersial})
    // base64Img.img(gambar_komersial, '../public', Date.now(), (err, filePath) => {
    //     const pathArr = filePath.split('/')
    //     const fileName = pathArr[pathArr.length - 1]

    //     res.status(200).json({
    //         message:'Insert data success !',
    //         url: `http://127.0.0.1:3000/${fileName}`
    //     })
    // })


    pool.query(queries.insertData, [jenis_komersial, gambar_komersial, fasilitas, harga])
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

const updateKomersial = (req, res) => {
    const {jenis_komersial, gambar_komersial, fasilitas, harga} = req.body
    
    pool.query(queries.updateData, [jenis_komersial, gambar_komersial, fasilitas, harga, req.params.id])
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

const deleteKomersial = (req, res) => {
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
    getKomersial,
    insertKomersial,
    updateKomersial,
    deleteKomersial,
    getKomersialById
}