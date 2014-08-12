'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);
  

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/', index.index);

  app.get('/data/event/:eventId', function (req, res) {
    var myJSON = {};

    switch(parseInt(req.params.eventId, 10)){
      case 1:
        myJSON = {
        name: 'AngularJS Event',
        date: '23/4/2014',
        time: '10:30 am',
        location:{
          address: 'Google HQ',
          city: 'Los Angeles',
          province: 'CA'
        },
        img: 'images/AngularJS-large.png',
        
        sessions: [{
          name: 'Masterclass',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, porro!',
          votes: 0,
          level: 'advanced',
          duration: 2
        },
        {
          name: 'Scopes',
          abstract: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
          votes: 0,
          level: 'easy',
          duration: 3
        },
        {
          name: 'Controllers',
          abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, dolore similique nisi.',
          votes: 0,
          level: 'intermediate',
          duration: 1
        },
        {
          name: 'Views',
          abstract: 'Neque, dolore similique nisi. Lorem ipsum dolor sit amet, consectetur adipisicing.',
          votes: 0,
          level: 'easy',
          duration: 4
        }]
      };
      break;
    }

    res.json(myJSON);
  });
};