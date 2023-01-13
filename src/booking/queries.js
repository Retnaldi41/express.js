const getData = "SELECT * from booking";
const insertData = "INSERT INTO booking (id_user, jenis_booking, id_item, tanggal_booking, bukti_transfer, alasan, status) values ($1, $2, $3, $4, $5, $6, $7)";
const deleteData = "DELETE FROM booking where id_booking = $1 ";
const updateData = "UPDATE booking set id_user = $1, jenis_booking = $2, id_item = $3, tanggal_booking = $4, bukti_transfer = $5, alasan = $6 ,status = $7 where id_booking = $8";
const updateStatus = "UPDATE booking set status = $1 where id_booking = $2";
const updateRescheduling = "UPDATE booking set tanggal_booking = $1, status = $2 where id_booking = $3";
const updateTransfer = "UPDATE booking set bukti_transfer = $1, status = 4 where id_booking = $2";
const updatePembatalan = "UPDATE booking set status = $1, alasan = $3 where id_booking = $2";
const getBookingById = "SELECT * from booking where id_user = $1";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
    updateStatus,
    updateRescheduling,
    updatePembatalan,
    updateTransfer,
    getBookingById
}