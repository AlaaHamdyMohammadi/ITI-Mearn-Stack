//db.createCollection("inventory")


//db.inventory.insertMany([
//  {
//    item: 'canvas',
//    qty: 100,
//    size: { h: 28, w: 35.5, uom: 'cm' },
//    status: 'A'
//  },
//  {
//    item: 'journal',
//    qty: 25,
//    size: { h: 14, w: 21, uom: 'cm' },
//    status: 'A'
//  },
//  {
//    item: 'mat',
//    qty: 85,
//    size: { h: 27.9, w: 35.5, uom: 'cm' },
//    status: 'A'
//  },
//  {
//    item: 'mousepad',
//    qty: 25,
//    size: { h: 19, w: 22.85, uom: 'cm' },
//    status: 'P'
//  },
//  {
//    item: 'notebook',
//    qty: 50,
//    size: { h: 8.5, w: 11, uom: 'in' },
//    status: 'P'
//  },
//  {
//    item: 'paper',
//    qty: 100,
//    size: { h: 8.5, w: 11, uom: 'in' },
//    status: 'D'
//  },
//  {
//    item: 'planner',
//    qty: 75,
//    size: { h: 22.85, w: 30, uom: 'cm' },
//    status: 'D'
//  },
//  {
//    item: 'postcard',
//    qty: 45,
//    size: { h: 10, w: 15.25, uom: 'cm' },
//    status: 'A'
//  },
//  {
//    item: 'sketchbook',
//    qty: 80,
//    size: { h: 14, w: 21, uom: 'cm' },
//    status: 'A'
//  },
//  {
//    item: 'sketch pad',
//    qty: 95,
//    size: { h: 22.85, w: 30.5, uom: 'cm' },
//    status: 'A'
//  }
//]);

//db.inventory.find()


//db.inventory.replaceOne({item:"journal"},{item:"tshirt",qty:50,status:"A"})

//db.inventory.find({"size.h":{$lt:15}})

//db.createCollection("student")

//db.students.insertMany([
//{name:"ali",age:15,skills:["drawing","football"]},
//{name:"ahmed",age:10,skills:["reading","writing"]},
//{name:"karim",age:8,skills:["swimming"]},
//{name:"hend",age:9,skills:["football","drawing"]}
//])




//db.students.find({skills:"football"})


//db.students.find({skills:["football"]})

//db.students.find({name:{$in:["ahmed","hend","ali"]}})


//db.students.find({name:{$nin:["ahmed","hend","ali"]}})

//db.students.find({$nor:[{name:"ali"},{age:10}]})

//db.students.find({age:{$not:{$gt:10}}})

//db.students.find({$and:[{name:"hend"},{age:9}]})

//db.students.find({name:"hend",age:9})
//
//db.students.find({age:{$gt:10},age:{$lt:16}})


//db.inventory.find()

db.inventory.insertOne( {
    item: 'mug',
    qty: "40",
    size: {},
   status: 'B'
 })
//$exists

//db.inventory.find({size:{$exists:true}})

//db.inventory.find({qty:{$type:"number"}})

//db.inventory.find({item:{$regex:/m/}})


//db.students.find()

//db.students.find({skills:{$size:2}})

//db.students.find({skills:["football","drawing"]})

//db.students.find({skills:{$all:["football","drawing"]}})

//$elemMatch

db.inventory.find()
db.inventory.createIndex({item:1})
db.inventory.getIndexes()

//db.survey.insertMany( [
//   { "_id": 1, "results": [ { "product": "abc", "score": 10 }, { "product": "xyz", "score": 7 } ] },
//   { "_id": 2, "results": [ { "product": "abc", "score": 8 }, { "product": "xyz", "score": 7 } ] },
//   { "_id": 3, "results": [ { "product": "abc", "score": 7 },{ "product": "xyz", "score": 8 } ] },
//   { "_id": 4, "results": [ { "product": "abc", "score": 7 },{ "product": "def", "score": 8 } ] }
//] )


//db.survey.find({$and:[{"results.product":"abc"},{"results.score":7}]})

//db.survey.find({results:{$elemMatch:{product:"abc",score:7}}})




//db.survey.find().skip(10).limit(10)



db.orders.insertMany( [
   { _id: 0, name: "Pepperoni", size: "small", price: 19,
     quantity: 10, date: ISODate( "2021-03-13T08:14:30Z" ) },
   { _id: 1, name: "Pepperoni", size: "medium", price: 20,
     quantity: 20, date : ISODate( "2021-03-13T09:13:24Z" ) },
   { _id: 2, name: "Pepperoni", size: "large", price: 21,
     quantity: 30, date : ISODate( "2021-03-17T09:22:12Z" ) },
   { _id: 3, name: "Cheese", size: "small", price: 12,
     quantity: 15, date : ISODate( "2021-03-13T11:21:39.736Z" ) },
   { _id: 4, name: "Cheese", size: "medium", price: 13,
     quantity:50, date : ISODate( "2022-01-12T21:23:13.331Z" ) },
   { _id: 5, name: "Cheese", size: "large", price: 14,
     quantity: 10, date : ISODate( "2022-01-12T05:08:13Z" ) },
   { _id: 6, name: "Vegan", size: "small", price: 17,
     quantity: 10, date : ISODate( "2021-01-13T05:08:13Z" ) },
   { _id: 7, name: "Vegan", size: "medium", price: 18,
     quantity: 10, date : ISODate( "2021-01-13T05:10:13Z" ) }
] )



//db.orders.find({size:"medium"})


db.orders.aggregate([
     {$match:{quantity:{$lte:30}}},
    {$group:{_id:"$name",totalquantity:{$sum:"$quantity"}}},
//    {$project:{totalquantity:1,_id:0}},
    {$sort:{totalquantity:-1}}
])








db.orders.aggregate( [
   // Stage 1: Filter pizza order documents by date range
   {
      $match:
      {
         "date": { $gte: new ISODate( "2020-01-30" ), $lt: new ISODate( "2022-01-30" ) }
      }
   },
   // Stage 2: Group remaining documents by date and calculate results
   {
      $group:
      {
         _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
         totalOrderValue: { $sum: { $multiply: [ "$price", "$quantity" ] } },
         averageOrderQuantity: { $avg: "$quantity" }
      }
   },
   // Stage 3: Sort documents by totalOrderValue in descending order
   {
      $sort: { totalOrderValue: -1 }
   },
   {
       $limit:3
   }
 ] )




//db.orders.aggregate([
//{$group:{_id:null,count:{$sum:1}}}
//])

//db.orders.find().count()



//db.orders.find()
//
//db.orders.insertOne({
//      "name" : "Pepperoni",
//    "size" : "Large",
//    "price" : 80,
//    "quantity" :400,
//    "createdAt" :new Date()
//})


//db.orders.findOne({price:80})._id.getTimestamp()








db.createCollection("products", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Student Object Validation",
         required: [ "name", "price", "quantity" ],
         properties: {
            name: {
               bsonType: "string",
               description: "'name' must be a string and is required"
            },
            price: {
               bsonType: "int",
               minimum: 10,
               maximum: 1000,
               description: "'price' must be an integer in [ 2017, 3017 ] and is required"
            }
         }
      }
   }
} )


//db.products.insertOne({name:"iphone",price:800,quantity:10})


db.products.insertOne({name:"laptop",price:700,quantity:20,description:"this is laptop"})











