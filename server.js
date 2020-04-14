const express = require('express');
const encrypt = require('./encrypt_key');
const app = express();
app.get('/:card',async function(req,res){
	return res.send(await encrypt(req.params.card));
});
app.listen(process.env.PORT || 8080);