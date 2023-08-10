//Inserting data in the database
use udaicard
db.items.insertOne({
    name:"Apple",
    price:10000,
    rating:5,
    qty:244,
    sold:90
})

db.items.insertMany([{
    name:"Apple",
    price:10000,
    rating:5,
    qty:244,
    sold:90
}, {name:"Realem",
price:13000,
rating:6,
qty:264,
sold:99
},{name:"OOP",
price:10342,
rating:4.5,
qty:304,
sold:111
},    ])

//to find the data

db.items.finds()

//to find the particuler items
db.items.find({rating:5})

//below query give us which query is geater then or equal to
db.items.find({rating:{$gte:4.5}})
//also only geater then
db.items.find({rating:{$gt:4.5}})

//for AND operator
db.items.find({rating:{$gte:4.5},price:{$gt:4000}})

//for OR operator
db.items.find({ $or: [{ reting: { $gte: 5 } }, { price: { $gt: 1400 } }] })

//only show one item it's projection
db.items.find({rating:{$gt:3.5}},{rating:1})

//for delete the items in the databases
db.items.deleteOne({ price: 10342})

db.items.deleteMany({ price: 10342})

//for update the database in one
db.items.updateOne({name:"Realem"},{$set:{price:87}})

//for update the database in one
db.items.updateMany({name:"Realem"},{$set:{price:87}})
