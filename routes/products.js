var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db;

//POST
router.post('/products', function(req, res, next){

    if(req.body.name && req.body.pass){

        db = mongojs('mongodb://'+req.body.name+':'+req.body.pass+'@ds139198.mlab.com:39198/cloudfirst');
        
        // console.log(req);
        db.products.find(function(err, sucessData){
            if(err){
                res.send(err);
            }
        res.json(sucessData); 
        });
   
    }else{
        res.send("Authentication failed!");
    }

   
});

module.exports = router;