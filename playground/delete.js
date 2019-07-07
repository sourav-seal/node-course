const {MongoClient,ObjectID}=require('mongodb');
var _id=new ObjectID();
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
	if(err){
		console.log(err);
		return console.log('unable to connect');
	}
	console.log('connected to mongodb server');
	//delete one
/*db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
		console.log(result);

	});*/

	//delete many
/*	db.collection('Todos').deleteMany({text:"eat lunch"}).then((result)=>{
		console.log(result);

	});*/

	//findOneAndDelete


db.collection('Users').findOneAndDelete({_id:123}).then((result)=>{
		console.log(JSON.stringify(result,undefined,2));});
	//
});