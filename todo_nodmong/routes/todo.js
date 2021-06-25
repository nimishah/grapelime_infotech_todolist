var express = require('express');
var router = express.Router();

var helper = require('../helper/todohelper')
router.get('/',function (req, res) {
  
    res.send({message:"Welcome to Node"})

});

router.get('/view',function (req, res) {
    helper.getalllist((list) => {
      res.send({ list})
    })
  });

router.get('/delete',(req,res)=>{
    let id=req.query.id
    helper.deletefromlist(id).then((reponse)=>{
      res.send({message:"Deleted Successfully"})
    })
    })


router.post('/add', (req, res) => {
    helper.addtolist(req.body.params, (id) => {
      res.send({message:"New Item Added Successfully"})
    })
  })
module.exports = router;