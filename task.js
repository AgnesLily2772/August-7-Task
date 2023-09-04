
// use ProductsDB
db.products.insertMany([
        {
            "id": "1",
            "product_name": "Intelligent Fresh Chips",
            "product_price": 655.00,
            "product_material": "Concrete",
            "product_color": "mint green"
        },
        {
            "id": "2",
            "product_name": "Practical Fresh Sausages",
            "product_price": 911.0,
            "product_material": "Cotton",
            "product_color": "indigo"
        },
        {
            "id": "3",
            "product_name": "Refined Steel Car",
            "product_price": 690.00,
            "product_material": "Rubber",
            "product_color": "gold"
        },
        {
            "id": "4",
            "product_name": "Gorgeous Plastic Pants",
            "product_price": 492.00,
            "product_material": "Soft",
            "product_color": "plum"
        },
        {
            "id": "5",
            "product_name": "Sleek Cotton Chair",
            "product_price": 33.00,
            "product_material": "Fresh",
            "product_color": "black"
        },
        {
            "id": "6",
            "product_name": "Awesome Wooden Towels",
            "product_price": 474.00,
            "product_material": "Plastic",
            "product_color": "orange"
        },
        {
            "id": "7",
            "product_name": "Practical Soft Shoes",
            "product_price": 500.00,
            "product_material": "Rubber",
            "product_color": "pink"
        },
        {
            "id": "8",
            "product_name": "Incredible Steel Hat",
            "product_price": 78.00,
            "product_material": "Rubber",
            "product_color": "violet"
        },
        {
            "id": "9",
            "product_name": "Awesome Wooden Ball",
            "product_price": 28.00,
            "product_material": "Soft",
            "product_color": "azure"
        },
        {
            "id": "10",
            "product_name": "Generic Wooden Pizza",
            "product_price": 84.00,
            "product_material": "Frozen",
            "product_color": "indigo"
        },
        {
            "id": "11",
            "product_name": "Unbranded Wooden Cheese",
            "product_price":26.00,
            "product_material": "Soft",
            "product_color": "black"
        },
        {
            "id": "12",
            "product_name": "Unbranded Plastic Salad",
            "product_price": 89.00,
            "product_material": "Wooden",
            "product_color": "pink"
        },
        {
            "id": "13",
            "product_name": "Gorgeous Cotton Keyboard",
            "product_price": 37.00,
            "product_material": "Concrete",
            "product_color": "sky blue"
        },
        {
            "id": "14",
            "product_name": "Incredible Steel Shirt",
            "product_price": 54.00,
            "product_material": "Metal",
            "product_color": "white"
        },
        {
            "id": "15",
            "product_name": "Ergonomic Cotton Hat",
            "product_price": 43.00,
            "product_material": "Rubber",
            "product_color": "mint green"
        },
        {
            "id": "16",
            "product_name": "Small Soft Chair",
            "product_price": 47.00,
            "product_material": "Cotton",
            "product_color": "teal"
        },
        {
            "id": "17",
            "product_name": "Incredible Metal Car",
            "product_price":36.00,
            "product_material": "Fresh",
            "product_color": "indigo"
        },
        {
            "id": "18",
            "product_name": "Licensed Plastic Bacon",
            "product_price":88.00,
            "product_material": "Steel",
            "product_color": "yellow"
        },
        {
            "id": "19",
            "product_name": "Intelligent Cotton Chips",
            "product_price": 46.00,
            "product_material": "Soft",
            "product_color": "azure"
        },
        {
            "id": "20",
            "product_name": "Handcrafted Wooden Bacon",
            "product_price": 36.00,
            "product_material": "Concrete",
            "product_color": "lime"
        },
        {
            "id": "21",
            "product_name": "Unbranded Granite Chicken",
            "product_price": 90.00,
            "product_material": "Metal",
            "product_color": "gold"
        },
        {
            "id": "22",
            "product_name": "Ergonomic Soft Hat",
            "product_price": 99.00,
            "product_material": "Rubber",
            "product_color": "black"
        },
        {
            "id": "23",
            "product_name": "Intelligent Steel Pizza",
            "product_price": 95.00,
            "product_material": "Cotton",
            "product_color": "azure"
        },
        {
            "id": "24",
            "product_name": "Tasty Rubber Cheese",
            "product_price":47.00,
            "product_material": "Frozen",
            "product_color": "orchid"
        },
        {
            "id": "25",
            "product_name": "Licensed Steel Car",
            "product_price":20.00,
            "product_material": "Cotton",
            "product_color": "indigo"
        }
    ])
//1. Find all the information about each products
db.products.find({});
/*
Output==>
{
"_id": "64f5ad2e6c185ab4d2f62532",
"id": "1",
"product_name": "Intelligent Fresh Chips",
"product_price": 655,
"product_material": "Concrete",
"product_color": "mint green"
},
{
"_id": "64f5ad2e6c185ab4d2f62533",
"id": "2",
"product_name": "Practical Fresh Sausages",
"product_price": 911,
"product_material": "Cotton",
"product_color": "indigo"
},
{
"_id": "64f5ad2e6c185ab4d2f62534",
"id": "3",
"product_name": "Refined Steel Car",
"product_price": 690,
"product_material": "Rubber",
"product_color": "gold"
},
{
"_id": "64f5ad2e6c185ab4d2f62535",
"id": "4",
"product_name": "Gorgeous Plastic Pants",
"product_price": 492,
"product_material": "Soft",
"product_color": "plum"
},
{
"_id": "64f5ad2e6c185ab4d2f62536",
"id": "5",
"product_name": "Sleek Cotton Chair",
"product_price": 33,
"product_material": "Fresh",
"product_color": "black"
},
{
"_id": "64f5ad2e6c185ab4d2f62537",
"id": "6",
"product_name": "Awesome Wooden Towels",
"product_price": 474,
"product_material": "Plastic",
"product_color": "orange"
},
{
"_id": "64f5ad2e6c185ab4d2f62538",
"id": "7",
"product_name": "Practical Soft Shoes",
"product_price": 500,
"product_material": "Rubber",
"product_color": "pink"
},
{
"_id": "64f5ad2e6c185ab4d2f62539",
"id": "8",
"product_name": "Incredible Steel Hat",
"product_price": 78,
"product_material": "Rubber",
"product_color": "violet"
},
{
"_id": "64f5ad2e6c185ab4d2f6253a",
"id": "9",
"product_name": "Awesome Wooden Ball",
"product_price": 28,
"product_material": "Soft",
"product_color": "azure"
},
{
"_id": "64f5ad2e6c185ab4d2f6253b",
"id": "10",
"product_name": "Generic Wooden Pizza",
"product_price": 84,
"product_material": "Frozen",
"product_color": "indigo"
},
{
"_id": "64f5ad2e6c185ab4d2f6253c",
"id": "11",
"product_name": "Unbranded Wooden Cheese",
"product_price": 26,
"product_material": "Soft",
"product_color": "black"
},
{
"_id": "64f5ad2e6c185ab4d2f6253d",
"id": "12",
"product_name": "Unbranded Plastic Salad",
"product_price": 89,
"product_material": "Wooden",
"product_color": "pink"
},
{
"_id": "64f5ad2e6c185ab4d2f6253e",
"id": "13",
"product_name": "Gorgeous Cotton Keyboard",
"product_price": 37,
"product_material": "Concrete",
"product_color": "sky blue"
},
{
"_id": "64f5ad2e6c185ab4d2f6253f",
"id": "14",
"product_name": "Incredible Steel Shirt",
"product_price": 54,
"product_material": "Metal",
"product_color": "white"
},
{
"_id": "64f5ad2e6c185ab4d2f62540",
"id": "15",
"product_name": "Ergonomic Cotton Hat",
"product_price": 43,
"product_material": "Rubber",
"product_color": "mint green"
},
{
"_id": "64f5ad2e6c185ab4d2f62541",
"id": "16",
"product_name": "Small Soft Chair",
"product_price": 47,
"product_material": "Cotton",
"product_color": "teal"
},
{
"_id": "64f5ad2e6c185ab4d2f62542",
"id": "17",
"product_name": "Incredible Metal Car",
"product_price": 36,
"product_material": "Fresh",
"product_color": "indigo"
},
{
"_id": "64f5ad2e6c185ab4d2f62543",
"id": "18",
"product_name": "Licensed Plastic Bacon",
"product_price": 88,
"product_material": "Steel",
"product_color": "yellow"
},
{
"_id": "64f5ad2e6c185ab4d2f62544",
"id": "19",
"product_name": "Intelligent Cotton Chips",
"product_price": 46,
"product_material": "Soft",
"product_color": "azure"
},
{
"_id": "64f5ad2e6c185ab4d2f62545",
"id": "20",
"product_name": "Handcrafted Wooden Bacon",
"product_price": 36,
"product_material": "Concrete",
"product_color": "lime"
},
{
"_id": "64f5ad2e6c185ab4d2f62546",
"id": "21",
"product_name": "Unbranded Granite Chicken",
"product_price": 90,
"product_material": "Metal",
"product_color": "gold"
},
{
"_id": "64f5ad2e6c185ab4d2f62547",
"id": "22",
"product_name": "Ergonomic Soft Hat",
"product_price": 99,
"product_material": "Rubber",
"product_color": "black"
},
{
"_id": "64f5ad2e6c185ab4d2f62548",
"id": "23",
"product_name": "Intelligent Steel Pizza",
"product_price": 95,
"product_material": "Cotton",
"product_color": "azure"
},
{
"_id": "64f5ad2e6c185ab4d2f62549",
"id": "24",
"product_name": "Tasty Rubber Cheese",
"product_price": 47,
"product_material": "Frozen",
"product_color": "orchid"
},
{
"_id": "64f5ad2e6c185ab4d2f6254a",
"id": "25",
"product_name": "Licensed Steel Car",
"product_price": 20,
"product_material": "Cotton",
"product_color": "indigo"
}

*/
// Find the product price which are between 400 to 800
db.products.find({  "product_price": {    $gte: 400,    $lte: 800  }});
/*
Output==>
{
"_id": "64f5ad2e6c185ab4d2f62532",
"id": "1",
"product_name": "Intelligent Fresh Chips",
"product_price": 655,
"product_material": "Concrete",
"product_color": "mint green"
},
{
"_id": "64f5ad2e6c185ab4d2f62534",
"id": "3",
"product_name": "Refined Steel Car",
"product_price": 690,
"product_material": "Rubber",
"product_color": "gold"
},
{
"_id": "64f5ad2e6c185ab4d2f62535",
"id": "4",
"product_name": "Gorgeous Plastic Pants",
"product_price": 492,
"product_material": "Soft",
"product_color": "plum"
},
{
"_id": "64f5ad2e6c185ab4d2f62537",
"id": "6",
"product_name": "Awesome Wooden Towels",
"product_price": 474,
"product_material": "Plastic",
"product_color": "orange"
},
{
"_id": "64f5ad2e6c185ab4d2f62538",
"id": "7",
"product_name": "Practical Soft Shoes",
"product_price": 500,
"product_material": "Rubber",
"product_color": "pink"
}
 */
// Find the product price which are not between 400 to 600
db.products.find({  "product_price": {    $not: {      $gte: 400,      $lte: 600    }  }});
/*
Output==>
{
"_id": "64f5ad2e6c185ab4d2f62532",
"id": "1",
"product_name": "Intelligent Fresh Chips",
"product_price": 655,
"product_material": "Concrete",
"product_color": "mint green"
},
{
"_id": "64f5ad2e6c185ab4d2f62533",
"id": "2",
"product_name": "Practical Fresh Sausages",
"product_price": 911,
"product_material": "Cotton",
"product_color": "indigo"
},
{
"_id": "64f5ad2e6c185ab4d2f62534",
"id": "3",
"product_name": "Refined Steel Car",
"product_price": 690,
"product_material": "Rubber",
"product_color": "gold"
},
{
"_id": "64f5ad2e6c185ab4d2f62536",
"id": "5",
"product_name": "Sleek Cotton Chair",
"product_price": 33,
"product_material": "Fresh",
"product_color": "black"
},
{
"_id": "64f5ad2e6c185ab4d2f62539",
"id": "8",
"product_name": "Incredible Steel Hat",
"product_price": 78,
"product_material": "Rubber",
"product_color": "violet"
},
{
"_id": "64f5ad2e6c185ab4d2f6253a",
"id": "9",
"product_name": "Awesome Wooden Ball",
"product_price": 28,
"product_material": "Soft",
"product_color": "azure"
},
{
"_id": "64f5ad2e6c185ab4d2f6253b",
"id": "10",
"product_name": "Generic Wooden Pizza",
"product_price": 84,
"product_material": "Frozen",
"product_color": "indigo"
},
{
"_id": "64f5ad2e6c185ab4d2f6253c",
"id": "11",
"product_name": "Unbranded Wooden Cheese",
"product_price": 26,
"product_material": "Soft",
"product_color": "black"
},
{
"_id": "64f5ad2e6c185ab4d2f6253d",
"id": "12",
"product_name": "Unbranded Plastic Salad",
"product_price": 89,
"product_material": "Wooden",
"product_color": "pink"
},
{
"_id": "64f5ad2e6c185ab4d2f6253e",
"id": "13",
"product_name": "Gorgeous Cotton Keyboard",
"product_price": 37,
"product_material": "Concrete",
"product_color": "sky blue"
},
{
"_id": "64f5ad2e6c185ab4d2f6253f",
"id": "14",
"product_name": "Incredible Steel Shirt",
"product_price": 54,
"product_material": "Metal",
"product_color": "white"
},
{
"_id": "64f5ad2e6c185ab4d2f62540",
"id": "15",
"product_name": "Ergonomic Cotton Hat",
"product_price": 43,
"product_material": "Rubber",
"product_color": "mint green"
},
{
"_id": "64f5ad2e6c185ab4d2f62541",
"id": "16",
"product_name": "Small Soft Chair",
"product_price": 47,
"product_material": "Cotton",
"product_color": "teal"
},
{
"_id": "64f5ad2e6c185ab4d2f62542",
"id": "17",
"product_name": "Incredible Metal Car",
"product_price": 36,
"product_material": "Fresh",
"product_color": "indigo"
},
{
"_id": "64f5ad2e6c185ab4d2f62543",
"id": "18",
"product_name": "Licensed Plastic Bacon",
"product_price": 88,
"product_material": "Steel",
"product_color": "yellow"
},
{
"_id": "64f5ad2e6c185ab4d2f62544",
"id": "19",
"product_name": "Intelligent Cotton Chips",
"product_price": 46,
"product_material": "Soft",
"product_color": "azure"
},
{
"_id": "64f5ad2e6c185ab4d2f62545",
"id": "20",
"product_name": "Handcrafted Wooden Bacon",
"product_price": 36,
"product_material": "Concrete",
"product_color": "lime"
},
{
"_id": "64f5ad2e6c185ab4d2f62546",
"id": "21",
"product_name": "Unbranded Granite Chicken",
"product_price": 90,
"product_material": "Metal",
"product_color": "gold"
},
{
"_id": "64f5ad2e6c185ab4d2f62547",
"id": "22",
"product_name": "Ergonomic Soft Hat",
"product_price": 99,
"product_material": "Rubber",
"product_color": "black"
},
{
"_id": "64f5ad2e6c185ab4d2f62548",
"id": "23",
"product_name": "Intelligent Steel Pizza",
"product_price": 95,
"product_material": "Cotton",
"product_color": "azure"
}
 */
// List the four product which are grater than 500 in price 
db.products.find({  "product_price": { $gt: 500 }}).limit(4);
/*
Output==>
{
"_id": "64f5ad2e6c185ab4d2f62532",
"id": "1",
"product_name": "Intelligent Fresh Chips",
"product_price": 655,
"product_material": "Concrete",
"product_color": "mint green"
},
{
"_id": "64f5ad2e6c185ab4d2f62533",
"id": "2",
"product_name": "Practical Fresh Sausages",
"product_price": 911,
"product_material": "Cotton",
"product_color": "indigo"
},
{
"_id": "64f5ad2e6c185ab4d2f62534",
"id": "3",
"product_name": "Refined Steel Car",
"product_price": 690,
"product_material": "Rubber",
"product_color": "gold"
}
 */
// Find the product name and product material of each products
db.products.find({}, { "product_name": 1, "product_material": 1, "_id": 0 });
/*
Output==>
{
  product_name: 'Intelligent Fresh Chips',
  product_material: 'Concrete'
}
{
  product_name: 'Practical Fresh Sausages',
  product_material: 'Cotton'
}
{
  product_name: 'Refined Steel Car',
  product_material: 'Rubber'
}
{
  product_name: 'Gorgeous Plastic Pants',
  product_material: 'Soft'
}
{
  product_name: 'Sleek Cotton Chair',
  product_material: 'Fresh'
}
{
  product_name: 'Awesome Wooden Towels',
  product_material: 'Plastic'
}
{
  product_name: 'Practical Soft Shoes',
  product_material: 'Rubber'
}
{
  product_name: 'Incredible Steel Hat',
  product_material: 'Rubber'
}
{
  product_name: 'Awesome Wooden Ball',
  product_material: 'Soft'
}
{
  product_name: 'Generic Wooden Pizza',
  product_material: 'Frozen'
}
{
  product_name: 'Unbranded Wooden Cheese',
  product_material: 'Soft'
}
{
  product_name: 'Unbranded Plastic Salad',
  product_material: 'Wooden'
}
{
  product_name: 'Gorgeous Cotton Keyboard',
  product_material: 'Concrete'
}
{
  product_name: 'Incredible Steel Shirt',
  product_material: 'Metal'
}
{
  product_name: 'Ergonomic Cotton Hat',
  product_material: 'Rubber'
}
{
  product_name: 'Small Soft Chair',
  product_material: 'Cotton'
}
{
  product_name: 'Incredible Metal Car',
  product_material: 'Fresh'
}
{
  product_name: 'Licensed Plastic Bacon',
  product_material: 'Steel'
}
{
  product_name: 'Intelligent Cotton Chips',
  product_material: 'Soft'
}
{
  product_name: 'Handcrafted Wooden Bacon',
  product_material: 'Concrete'
}
{
  product_name: 'Unbranded Granite Chicken',
  product_material: 'Metal'
}
{
  product_name: 'Ergonomic Soft Hat',
  product_material: 'Rubber'
}
{
  product_name: 'Intelligent Steel Pizza',
  product_material: 'Cotton'
}
{
  product_name: 'Tasty Rubber Cheese',
  product_material: 'Frozen'
}
{
  product_name: 'Licensed Steel Car',
  product_material: 'Cotton'
}
 */
// Find the product with a row id of 10
db.products.find({ "id": "10" });
/*
Output==>
{
        _id: ObjectId("64f5ad2e6c185ab4d2f6253b"),
        id: '10',
        product_name: 'Generic Wooden Pizza',
        product_price: 84,
        product_material: 'Frozen',
        product_color: 'indigo'
}
*/
// Find only the product name and product material
db.products.find({}, { "product_name": 1, "product_material": 1, "_id": 1 });
/*
Output==>
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62532"),
  product_name: 'Intelligent Fresh Chips',
  product_material: 'Concrete'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62533"),
  product_name: 'Practical Fresh Sausages',
  product_material: 'Cotton'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62534"),
  product_name: 'Refined Steel Car',
  product_material: 'Rubber'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62535"),
  product_name: 'Gorgeous Plastic Pants',
  product_material: 'Soft'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62536"),
  product_name: 'Sleek Cotton Chair',
  product_material: 'Fresh'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62537"),
  product_name: 'Awesome Wooden Towels',
  product_material: 'Plastic'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62538"),
  product_name: 'Practical Soft Shoes',
  product_material: 'Rubber'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62539"),
  product_name: 'Incredible Steel Hat',
  product_material: 'Rubber'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f6253a"),
  product_name: 'Awesome Wooden Ball',
  product_material: 'Soft'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f6253b"),
  product_name: 'Generic Wooden Pizza',
  product_material: 'Frozen'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f6253c"),
  product_name: 'Unbranded Wooden Cheese',
  product_material: 'Soft'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f6253d"),
  product_name: 'Unbranded Plastic Salad',
  product_material: 'Wooden'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f6253e"),
  product_name: 'Gorgeous Cotton Keyboard',
  product_material: 'Concrete'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f6253f"),
  product_name: 'Incredible Steel Shirt',
  product_material: 'Metal'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62540"),
  product_name: 'Ergonomic Cotton Hat',
  product_material: 'Rubber'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62541"),
  product_name: 'Small Soft Chair',
  product_material: 'Cotton'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62542"),
  product_name: 'Incredible Metal Car',
  product_material: 'Fresh'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62543"),
  product_name: 'Licensed Plastic Bacon',
  product_material: 'Steel'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62544"),
  product_name: 'Intelligent Cotton Chips',
  product_material: 'Soft'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62545"),
  product_name: 'Handcrafted Wooden Bacon',
  product_material: 'Concrete'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62546"),
  product_name: 'Unbranded Granite Chicken',
  product_material: 'Metal'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62547"),
  product_name: 'Ergonomic Soft Hat',
  product_material: 'Rubber'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62548"),
  product_name: 'Intelligent Steel Pizza',
  product_material: 'Cotton'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f62549"),
  product_name: 'Tasty Rubber Cheese',
  product_material: 'Frozen'
}
{
  _id: ObjectId("64f5ad2e6c185ab4d2f6254a"),
  product_name: 'Licensed Steel Car',
  product_material: 'Cotton'
}
 */
// Find all products which contain the value of soft in product material 
db.products.find({ "product_material": { $regex: /soft/i } });
/*
Output==>
{
        _id: ObjectId("64f5ad2e6c185ab4d2f62535"),
        id: '4',
        product_name: 'Gorgeous Plastic Pants',
        product_price: 492,
        product_material: 'Soft',
        product_color: 'plum'
      }
      {
        _id: ObjectId("64f5ad2e6c185ab4d2f6253a"),
        id: '9',
        product_name: 'Awesome Wooden Ball',
        product_price: 28,
        product_material: 'Soft',
        product_color: 'azure'
      }
      {
        _id: ObjectId("64f5ad2e6c185ab4d2f6253c"),
        id: '11',
        product_name: 'Unbranded Wooden Cheese',
        product_price: 26,
        product_material: 'Soft',
        product_color: 'black'
      }
      {
        _id: ObjectId("64f5ad2e6c185ab4d2f62544"),
        id: '19',
        product_name: 'Intelligent Cotton Chips',
        product_price: 46,
        product_material: 'Soft',
        product_color: 'azure'
      }
      */
// Find products which contain product color indigo  and product price 492.00
db.products.find({  $and: [    { "product_color": "indigo" },    { "product_price": 20 }  ]});
/*
Output==>
{
  _id: ObjectId("64f5ad2e6c185ab4d2f6254a"),
  id: '25',
  product_name: 'Licensed Steel Car',
  product_price: 20,
  product_material: 'Cotton',
  product_color: 'indigo'
}
 */
// Delete the products which product price value are same
db.products.aggregate([{$group:{_id:"$product_price",count:{$sum:1}}},{$match:{count:{"$gt":1}}}])
/*
Output==>

 */