const {MongoClient,ObjectID}=require('mongodb');
var _id=new ObjectID();
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
	if(err){
		console.log(err);
		return console.log('unable to connect');
	}
	console.log('connected to mongodb server');
/*	db.collection('Todos').insertOne({
		text:'something to do',
		completed:false
	},(err,result)=>{
		if(err){
		return console.log('unable to insert');}
		console.log(JSON.stringify(result.ops,undefined,2));
	});*/
		db.collection('Users').insertOne({
			_id,
			name:'SOURAV SEAL',
			age:21,
			location:'kolkata'
	},(err,result)=>{
		if(err){
		return console.log('unable to insert');}
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
	});
	db.close();
});