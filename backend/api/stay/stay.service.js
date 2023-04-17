const { connection } = require('../../services/db.service')
// import { connection } from "../../services/db.service"
async function query(filterBy) {
    try {
        return connection.promise().query("SELECT * FROM customers", function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
            return result
        })

    } catch (err) {
        throw err
    }
}

module.exports = {
    query,
}