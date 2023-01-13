const getData = "SELECT * from pembatalan";
const insertData = "INSERT INTO pembatalan (alasan ,bukti_transfer_pembatalan) values ($1, $2)";
const deleteData = "DELETE FROM pembatalan where id = $1 ";
const updateData = "UPDATE pembatalan set alasan = $1, bukti_transfer_pembatalan = $2 where id_pembatalan = $3";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData
}