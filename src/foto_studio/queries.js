const getData = "SELECT * from foto_studio";
const insertData = "INSERT INTO foto_studio (jenis_studio, gambar_studio, fasilitas, harga) values ($1, $2, $3, $4)";
const deleteData = "DELETE FROM foto_studio where id_studio = $1 ";
const updateData = "UPDATE foto_studio set jenis_studio = $1, gambar_studio = $2, fasilitas = $3, harga = $4 where id_studio = $5";
const getStudioById = "SELECT * from foto_studio where id_studio = $1";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
    getStudioById
}