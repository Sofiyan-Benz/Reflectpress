var express = require('express');
var router = express.Router();

const userModel = require('../models/users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', async function (req, res,next){

  var  error = [];
  var result = false
  var saveUser = null

  const data = await userModel.findOne({
    email: req.body.emailFromFront
  })

  if (data != null) {
    error.push('utilisateur deja present')
  }

  if(req.body.usernameFromFront == '' || req.body.emailFromFront == '' || req.body.passwordFromFront == '' )
     {
          error.push('Champs vides')
  }

  if (error.length == 0) {
    const newUser = new userModel({
      username: req.body.usernameFromFront,
      email: req.body.emailFromFront,
      password: req.body.passwordFromFront
    })
     saveUser = await newUser.save()

    if (saveUser) {
      result = true
    }
  }



res.json({result, saveUser, error})
})

router.post('/sign-in', async function (req, res,next){
  var error = [];
  var user = null
  var result = false

  if (req.body.emailFromFront == '' || req.body.passwordFromFront == '') {
          error.push('Champs vides')
  }

  if (error.length == 0) {
    const user = await userModel.findOne({

      email: req.body.emailFromFront,
      password: req.body.passwordFromFront
  })

if (user) {
  result = true
} else {
  error.push('email ou mot de passe incorrect')
}
  }

res.json({result, user, error})
})


module.exports = router;
