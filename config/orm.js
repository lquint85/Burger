let connection = require(".connection");

let orm = {
        selectAll: function (table, modelCb) {
            let queryString = 'SELECT * FROM ${table};';
            connection.query(queryString, function (err, results) {
                if (err) {
                    throw err;
                }
                modelCb(results);
                console.log(results);
            });
        },


        insertOne: function (table, values, modelCb) {
            
            let valString = '${values}';
            let queryString = 'INSERT INTO ${table} (burger_name) 
            VALUES (${valString});
            conncection.query(queryString, function (err, results) {
                if (err) {
                    throw (err)
                };
                modelCb(results);

            })
        },

        updateOne: function (table, values, condition, modelCb) {
            let queryString = 'UPDATE ${table} SET eaten = ${values} WHERE ${condition};'
            connection.query(queryString, function(err, results) {
                if (err) {
                    throw err;
            
                };
                modelCb(results);
            })
        }
    };
    module.exports = orm;