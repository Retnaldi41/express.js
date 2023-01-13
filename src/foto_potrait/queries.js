const getData = "SELECT * from foto_potrait";
const insertData = "INSERT INTO foto_potrait (jenis_potrait, gambar_potrait, fasilitas, harga) values ($1, $2, $3, $4)";
const deleteData = "DELETE FROM foto_potrait where id_potrait = $1 ";
const updateData = "UPDATE foto_potrait set jenis_potrait = $1, gambar_potrait = $2, fasilitas = $3, harga = $4 where id_potrait = $5";
const getPotraitById = "SELECT * from foto_potrait where id_potrait = $1";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
    getPotraitById
}