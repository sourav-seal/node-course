 
 var mongoose=require('mongoose');
 var users=mongoose.model('Users',{
	user_name:{
		type:String,
		required:true,
		minlength:1
	},
	email:{
		type:String,
		required:true,
		min:5,
		trim:true
		
	}
});
 module.exports={users};