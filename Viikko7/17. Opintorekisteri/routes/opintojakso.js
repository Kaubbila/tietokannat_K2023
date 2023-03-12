const express = require('express');
const router = express.Router();
const opintojakso = require('../models/opintojakso_model');

//Tässä on postmanin toiminnot

//Näyttää koko kirjaston 
router.get('/',
    function (request, response) {
        opintojakso.getAll(function (err, dbResult) {
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
        opintojakso.getById(request.params.id, function (err, dbResult) {
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
  opintojakso.add(request.body, function(err, dbResult) {
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
  opintojakso.delete(request.params.id, function(err, dbResult) {
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
  opintojakso.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;
