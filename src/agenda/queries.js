const getData = "SELECT * from agenda";
const insertData = "INSERT INTO agenda (nama_agenda, tanggal_agenda) values ($1, $2)";
const deleteData = "DELETE FROM agenda where id_agenda = $1 ";
const updateData = "UPDATE agenda set nama_agenda = $1, tanggal_agenda = $2 where id_agenda = $3";
const getAgendaById = "SELECT * from agenda where id_agenda = $1";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
    getAgendaById
}