const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
	if(err){
		console.log(err);
		return console.log('unable to connect');
	}
	console.log('connected to mongodb server');
/*	db.collection('Users').find().toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('unable to fetch useers');
	});*/

	db.collection('Users').find({location:'kolkata'}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('unable to fetch useers');
	});
	//db.close();
	/*db.collection('Users').find({location:'kolkata'}).count().then((count)=>{
		console.log(`todos : ${count}`);
	},(err)=>{
		console.log('unable to fetch useers');
	});*/

});
 