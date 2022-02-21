const express = require("express");
const router = express.Router();
const axios = require('axios')
require('dotenv').config();
const headers = {
  Accept:'application/json'
}

const URL = `https://oapi.saramin.co.kr/job-search?access-key=${process.env.API_KEY}`

router.route('/').post((req,res)=>{
  const {keywords, loc_cd} = req.body
  
  const url = URL + (keywords ? `&keywords=${encodeURI(keywords)}`:'') + (loc_cd ? `&loc_cd=${loc_cd}`:'')

  axios({
    method : 'GET',
    url,
    headers
  }).then(response => res.json(response.data))
})

router.route('/:id').get((req,res)=>{
  const { id } = req.params
  const url = URL + `&id=${id}`
  
  axios({
    method : 'GET',
    url ,
    headers
  }).then(response => res.json(response.data))
})

module.exports = router;