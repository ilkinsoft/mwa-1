var express = require('express');
var router = express.Router();

var entity = [
  {id: 1, name: "Asaad Saad", course: "CS572", grade: 95},
  {id: 2, name: "Eren Ozturk", course: "CS572", grade: 100}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(entity);
});




router.get('/:id', function(req, res, next) {

  entity.forEach(element => {
if(req.params.id==element.id){
  res.json(element);
}

    
  });

});


router.post('/', function(req, res, next) {
  console.log(req)
  entity.push(req.body)
  res.json(entity);
});


router.delete('/:id', function(req, res, next) {
entity.forEach(function(element,index){
  if(req.params.id==element.id){
    entity.splice(index,1);
  }
})



  res.json(entity);

});


module.exports = router;
