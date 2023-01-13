const getData = "SELECT * from foto_group";
const insertData = "INSERT INTO foto_group (jenis_group, gambar_group, fasilitas, harga) values ($1, $2, $3, $4)";
const deleteData = "DELETE FROM foto_group where id_group = $1 ";
const updateData = "UPDATE foto_group set jenis_group = $1, gambar_group = $2, fasilitas = $3, harga = $4 where id_group = $5";
const getGroupById = "SELECT * from foto_group where id_group = $1";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
    getGroupById
}