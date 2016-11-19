
#Setting up mongoDB to work with this app...

- Install MongoDB and create a DB named "mytestdb" or change the DB name inside of server.js (line:8) to your DB name.

- Insert the following record into your DB (You can change the other values as long as carId is 1).

{
	"_id" : ObjectId("58292243d173868cac5a4440"),
	"carId" : 1,
	"imgLoc" : "./img/",
	"overview" : {
		"name" : "El coche lento",
		"year" : 2013,
		"price" : "$0 - Priceless",
		"mileage" : "Too high",
		"itemNum" : "#12345",
		"vin" : "1HGBH41JXMN109186",
		"views" : 37,
		"saves" : 20,
		"shares" : 15
	},
	"exterior" : {
		"color" : "Polished Metal",
		"tires" : "4 and a spare",
		"rims" : "Silver",
		"style" : "Sedan"
	},
	"performance" : {
		"cylinders" : "L4",
		"cityMPG" : "25 MPG",
		"highwayMPG" : "30 MPG",
		"engine" : "1.3"
	}
}
