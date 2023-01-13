const getData = "SELECT * from foto_komersial";
const insertData = "INSERT INTO foto_komersial (jenis_komersial, gambar_komersial, fasilitas, harga) values ($1, $2, $3, $4)";
const deleteData = "DELETE FROM foto_komersial where id_komersial = $1 ";
const updateData = "UPDATE foto_komersial set jenis_komersial = $1, gambar_komersial = $2, fasilitas = $3, harga = $4 where id_komersial = $5";
const getKomersialById = "SELECT * from foto_komersial where id_komersial = $1";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
    getKomersialById
}