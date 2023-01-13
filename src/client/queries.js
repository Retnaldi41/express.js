const getData = "SELECT * from client";
const insertData = "INSERT INTO client (nama_client, tempat_client, jenis_foto, tanggal, link_file, total_biaya) values ($1, $2, $3, $4, $5, $6)";
const deleteData = "DELETE FROM client where id_client = $1 ";
const updateData = "UPDATE client set nama_client = $1, tempat_client = $2, jenis_foto=$3, tanggal=$4, link_file=$5, total_biaya=$6 where id_client = $7";
const getClientById = "SELECT * from client where id_client = $1";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
    getClientById
}