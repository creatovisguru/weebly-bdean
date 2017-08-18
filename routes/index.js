var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Benjamin Dean\'s Interview Project',
    companyName: 'Weebly',
    candidateName: 'Benjamin Dean',
    projectName: 'Developer Advocate',
    projectType: 'Interview'
    });
});

module.exports = router;
