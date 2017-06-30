
const express = require('express')
const app = express()

app.use(express.static('public'));                                                                                                             

var Datastore=require('nedb');                                //nedb 
var db = new Datastore({filename:'store.db',autoload:true});

app.set('view engine','ejs');

/*
app.get('/', function (req, res) {

	console.log(__dirname)
	res.sendFile(__dirname+'/public/proj2.html');
})

app.get('/register', function (req, res) {

	console.log(__dirname)
	res.sendFile(__dirname+'/public/page2.html');
})

app.get('/login', function (req, res) {

	console.log(__dirname)
	res.sendFile(__dirname+'/public/page3.html');
})
*/
app.get('/home', function  (req,res){
 
 db.find({},function(err,result){
 	res.render('index',{res:result} )

})
})
/*
app.get('/loginSubmit',function(req,res){
   var userEmail=req.query.email;
   var userPassword=req.query.password;


var user={
	"email":userEmail,
	"password":userPassword
}

db.find(user,function(err,result){

	console.log(result);



	
   if (result.length>0)
   	  res.send('Found');
   else
   	  res.send('Not Found');
})


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
	res.send('Successfully inserted');
})

})


app.get('/test',function(req,res){

	res.render('index', {name:"hari"});                           //file name
})
*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')	
})















/*

const express = require('express')
const app = express()

app.use(express.static('public'));                                                                                                             




app.get('/', function (req, res) {

	console.log(__dirname)
	res.sendFile(__dirname+'/public/class5.html');
})



app.get('/numSubmit', function (req, res) {


var num=req.query.number;

if (num%2==0)
{
res.send("Even");
}
else
{
res.send("Odd");
}
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')	
})*/