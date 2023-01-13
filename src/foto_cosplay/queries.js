const getData = "SELECT * from foto_cosplay";
const insertData = "INSERT INTO foto_cosplay (jenis_cosplay,  gambar_cosplay, fasilitas, harga) values ($1, $2, $3, $4)";
const deleteData = "DELETE FROM foto_cosplay where id_cosplay = $1 ";
const updateData = "UPDATE foto_cosplay set jenis_cosplay = $1, gambar_cosplay = $2, fasilitas = $3, harga = $4  where id_cosplay = $5";
const getCosplayById = "SELECT * from foto_cosplay where id_cosplay = $1";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
    getCosplayById
}