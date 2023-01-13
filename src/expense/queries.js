const getData = "SELECT * from booking";
const insertData = "INSERT INTO transaksi (title, amount, category) values ($1, $2, '2')";
const deleteData = "DELETE FROM transaksi where id = $1 ";
const updateData = "UPDATE transaksi set title = $1, amount = $2, input_time=now() where id = $3";
const sumExpense = "SELECT SUM(t.AMOUNT) amount FROM transaksi t where t.category='2'";

module.exports={
    getData,
    insertData,
    deleteData,
    updateData,
    sumExpense
}