var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoApp');


 var newTodo=new Todo({
 	user_name:"sourav",
 	email:"souravseal.sourav@gmail.com"
 });
/*  var newTodo=new Todo({
 	text:"cook dinner1",
 	completed:false,
 	completedAt:5
 });*/
 newTodo.save().then((doc)=>{
 	console.log(doc);
},(e)=>{

console.log('unable to save');

});