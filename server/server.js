var express=require('express');
var bodyParser=require('body-parser');




var {mongoose}=require('./db/mongoose');
var {Todo}=require('./modules/todos');
var {users}=require('./modules/user');
var app=express();
app.use(bodyParser.json());
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
app.listen(3000,()=>{
	
	console.log('up on port 3000');

} );

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