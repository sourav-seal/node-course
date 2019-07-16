const {ObjectID}=require('mongodb');

var {mongoose}=require('./../server/db/mongoose');
var {Todo}=require('./../server/modules/todos');
var {users}=require('./../server/modules/user'); 
var id='5d2723877e9ee6dc0edfe839';
if(!ObjectID.isValid(id)){
	console.log('sorry id is invalid');
}
Todo.findById(id).then((todo)=> {
	if(!todo){  
		return console.log('id not found');
	}
	console.log('todo find by id',todo);
}).catch((e)=>console.log(e));   
//also find