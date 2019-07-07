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


/*db.collection('Users').findOneAndUpdate({
	_id:new ObjectID('5d20545775d3ce2e3435dc07')},{
	$set: {
		age: 22
	}},
	{
		returnOriginal:false
	}
	).then((result)=>{
		console.log(result);
	});*/
	db.collection('Users').findOneAndUpdate({
	_id:new ObjectID('5d20545775d3ce2e3435dc07')},{
	$inc: {
		age: 1
	}},
	{
		returnOriginal:false
	}
	).then((result)=>{
		console.log(result);
	});
	//
});