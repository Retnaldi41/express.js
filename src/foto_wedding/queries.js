const getData = "SELECT * from foto_wedding";
const insertData = "INSERT INTO foto_wedding (jenis_wedding, gambar_wedding, fasilitas, harga) values ($1, $2, $3, $4)";
const deleteData = "DELETE FROM foto_wedding where id_wedding = $1 ";
const updateData = "UPDATE foto_wedding set jenis_wedding = $1, gambar_wedding = $2, fasilitas = $3, harga = $4 where id_wedding = $5";
const getWeddingById = "SELECT * from foto_wedding where id_wedding = $1";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
    getWeddingById
}