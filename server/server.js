var express=require('express');
var bodyParser=require('body-parser');



const {ObjectID}=require('mongodb');
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./modules/todos');
var {users}=require('./modules/user');
var app=express();
var port=process.env.PORT || 3000;
app.use(bodyParser.json());


////POST REQUEST FROM JSON FORMAT TO DB
app.post('/todos',(req,res)=>{
	var todo=new Todo({
		text:req.body.text,
		completed:req.body.completed
	});
		todo.save().then((doc)=>{ 
		res.send(doc);},
		(e)=>{
			res.status(400).send(e);
	});

});


app.get('/todos/:id',(req,res)=>{
	var id=req.params.id;
	if(!ObjectID.isValid(id)){
	res.status(404).send({})
}
Todo.findById(id).then((todo)=> {
	if(!todo){  
		return res.status(400).send({});
	}
	res.send({todo});
}).catch((e)=>res.status(400).send({}));   

});

// GET REQUEST FROM DATABASE TO JSON

app.get('/todos/',(req,res)=>{
	Todo.find().then((todos)=>{res.send({todos});},
	(e)=>{res.status(400).send(e);});
});
app.listen(port,()=>{
	
	console.log(`up on port {$port}`);

} );
module.exports={app};

 /*var newTodo=new Todo({
 	text:"cook dinner"
 });*/
/*  var newTodo=new Todo({
 	text:"cook dinner1",
 	completed:false,
 	completedAt:5
 });*/
/* newTodo.save().then((doc)=>{
 	console.log(doc);
},(e)=>{

console.log('unable to save');

});*/