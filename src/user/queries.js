const getData = "SELECT * from users";
const insertData = "INSERT INTO users (email, password, nama_user, alamat_user, telpon_user) values ($1, $2, $3, $4, $5)";
const deleteData = "DELETE FROM users where id_user = $1 ";
const updateData = "UPDATE user set email = $1, password = $2, nama_user = $3, alamat_user = $4, telpon_user = $5 where id_user = $6";
const getUserById = "SELECT * from users where email = $1 and password = $2";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
    getUserById
}