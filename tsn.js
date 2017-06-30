const express=require('express')
const app=express()	


app.use(express.static('public'));

app.set('port',process.env.PORT||5000)

var Datastore=require('nedb');                                
var db = new Datastore({filename:'stores.db',autoload:true});

app.set('view engine','ejs');
var reso;
db.find({},function(err,result){
	reso=result;
})

app.get('/', function (req, res) {

	console.log(__dirname)
	res.sendFile(__dirname+'/public/tsn.html');
})

app.get('/signup', function (req, res) {

	console.log(__dirname)
	res.render('tsnSignup')
})

app.get('/login', function (req, res) {

	console.log(__dirname)
	res.render('tsnLogin')


})

app.get('/signupSubmit', function (req, res) {

var name=req.query.name;
var lastname=req.query.lastname;
var email=req.query.email;
var password=req.query.password;
var mobile=req.query.mobile;
var dob=req.query.dob;


var person=
{
	"name":name,
	"lastname":lastname,
	"email":email,
	"password":password,
	"mobile":mobile,
	"dob":dob
}


db.insert(person,function(err,result){

	console.log(result);
    res.render('tsnLogin')
})


})

app.get('/members',function(req,res){
 var a=req.query.email
 var b=req.query.password
		var user={
	"email":a,
	"password":b
}


db.find(user,function(err,result){
	if (result.length>0)
 	res.render('tsnMembers',{res:reso} )

})
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')	
})

