const express = require('express');
const router = express.Router();
const { query, validationResult } = require('express-validator');

router.post('/', [
  query('name','name is required').not().isEmpty(),
  query('email','Please include a valid email').isEmail(),
  query('password','Please enter a password with 6 or more characters').isLength({min:6})
],(req,res)=> {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }

  res.send('User route')
});

module.exports = router;