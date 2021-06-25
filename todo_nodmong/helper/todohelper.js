var db = require('../db/connection')
var collection = require('../db/collection')
var objectid = require('mongodb').ObjectID


module.exports = {

    getalllist: async (callback) => {

        let list = await db.get().collection(collection.TODO_COLLECTION).find().toArray()
        return callback(list)

    },
    deletefromlist: (id) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.TODO_COLLECTION).removeOne({ _id: objectid(id) }).then((response) => {
                resolve(response)
            })
        })

    },
    addtolist: (newlist, callback) => {
        db.get().collection(collection.TODO_COLLECTION).insertOne(newlist).then((data) => {

            return callback(data.ops[0]._id)
        })
    },

}