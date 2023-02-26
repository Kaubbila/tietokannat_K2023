var express = require('express');
var router = express.Router();

/* GET users listing. */

// Get metodi
router.get('/', function(req, res, next) { 
  res.send('Pelkkä getti');
});

// Get metodi Yhdellä parametrilla
router.get('/yhdella/:nimi', function(request,response){ // 
response.send('Olen ydellä parametrilla ~Murr Murr~ ja nimeni on ' +request.params.nimi)
console.log('yhdella');
});

// Get metodi Kahdella parametrilla
router.get('/kahdella/:etunimi/:sukunimi', function(request,response){ 
  response.send('Olen kahdella parametrilla ~Miau Bork~ ja koko nimeni on '+request.params.etunimi+ ' ' +request.params.sukunimi)
  console.log(request.params.name)

  });

  //POST
  router.post('/',function (request, response){ // POST 
    response.send(request.body.etunimi +' ' + request.body.sukunimi+' kutsuttiin')
    console.log(request.body.etunimi +' ' + request.body.sukunimi)
  });

  //PUT
  router.put('/:id',function (request, response){ 
    response.send('Henkilölle '+request.params.id+' muutetaan nimeksi '
    +request.body.etunimi + ' ' + request.body.sukunimi)
    console.log(request.body.etunimi +' ' + request.body.sukunimi)
  });

module.exports = router;
