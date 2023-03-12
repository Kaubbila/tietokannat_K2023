const express = require('express');
const router = express.Router();
const opiskelija = require('../models/opiskelija_model');

//Tässä on postmanin toiminnot

//Näyttää koko kirjaston 
router.get('/',
    function (request, response) {
        opiskelija.getAll(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult);
            }
        })
    });

//Näyttää id:n perusteella
router.get('/:id',
    function (request, response) {
        opiskelija.getById(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

//Lisätään kirjastoon
router.post('/', 
function(request, response) {
  opiskelija.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});

//Poistetaan kirjastosta
router.delete('/:id', 
function(request, response) {
  opiskelija.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

//Muokataan kirjastossa olevaa
router.put('/:id', 
function(request, response) {
  opiskelija.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;
