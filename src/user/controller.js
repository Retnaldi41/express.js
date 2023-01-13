const { resolve } = require("path");
const pool = require("../../config/db");
const queries = require("./queries");

const getUser = (req, res) => {
    pool.query(queries.getData)
        .then(result => {
            console.log("berhasil")
            return res.status(200).json(result.rows)
        })
        .catch(e => {
            console.log("gagal")
            console.error(e.stack)
            return res.status(500).json({
                message: 'System error can\'t get data !'
            })
        })
};

const getUserById = (req, res) => {
    const { email, password } = req.body;
    pool
        .query(queries.getUserById, [email, password])
        .then((result) => {
            return res.status(200).json(result.rows[0])
            // console.log(result.rows[0])
            // if (result.rows[0] === undefined) {
            //     return res.status(401).json({
            //         message: 'System error can\'t delete data !'})
            // } else {
            //     return res.status(200).json(result.rows)
            // }        
        }).catch(e => {
            console.log("error get data", e);
            return res.status('500').json({
                message: "Not found!"
            })
        })
    // return res.status(200).json(data)
    // .catch(err => {
    // console.log("gagal")
    // // return res.status(401).json({
    // //     message: 'System error can\'t delete data !')
    // })
};
const insertUser = (req, res) => {

    const { email, password, nama_user, alamat_user, telpon_user } = req.body

    pool.query(queries.insertData, [email, password, nama_user, alamat_user, telpon_user])
        .then(result => {
            return res.status(200).json({
                message: 'Insert data success !'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'System error can\'t insert data !'
            })
        })
};

const updateUser = (req, res) => {
    const { email, password, nama_user, alamat_user, telpon_user, id_user } = req.body

    pool.query(queries.updateData, [email, password, nama_user, alamat_user, telpon_user, id_user])
        .then(result => {
            return res.status(200).json({
                message: 'update data success !'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'System error can\'t update data !'
            })
        })
};

const deleteUser = (req, res) => {
    const { id } = req.params

    pool.query(queries.deleteData, [parseInt(id)])
        .then(result => {
            return res.status(200).json({
                message: 'delete data success !'
            })
        })
        .catch(e => {
            console.error(e.stack)
            return res.status(500).json({
                message: 'System error can\'t delete data !'
            })
        })
};

module.exports = {
    getUser,
    insertUser,
    updateUser,
    deleteUser,
    getUserById
}