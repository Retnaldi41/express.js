const getData = "SELECT * from rescheduling";
const insertData = "INSERT INTO rescheduling (nama_rescheduling, tanggal_awal, tanggal_ganti, persetujuan) values ($1, $2, $3, $4)";
const deleteData = "DELETE FROM rescheduling where id = $1 ";
const updateData = "UPDATE rescheduling set nama_rescheduling = $1, tanggal_awal = $2, tanggal_ganti = $3, persetujuan = $4 where id_rescheduling = $5";
const updateStatus = "UPDATE booking set status = $1 where id_rescheduling = $2";
const getReschedulingById = "SELECT * from rescheduling where tanggal_booking = $1";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
    updateStatus,
    getReschedulingById
}