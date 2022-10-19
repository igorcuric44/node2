var express=require('express')
var app=express();


app.get('/list_user',function(req,res)
{
	console.log('Got a GET requst for /list_user');
	res.send('Page Listining');

});


var server=app.listen(8081,function()
{
var host=server.address().address;
var port=server.address().port;

console.log("Example app listening at http://%s:%s",host,port);


})

