const express = require("express");
const router = express.Router();
const axios = require('axios')
const headers = {
  Accept:'application/json'
}

router.route('/').get((req,res)=>{
  axios({
    method : 'GET',
    url : `https://oapi.saramin.co.kr/job-search?access-key=${process.env.API_KEY}`,
    headers
  }).then(response => res.json(response.data))
})

router.route('/:id').get((req,res)=>{
  const { id } = req.params
  
  axios({
    method : 'GET',
    url : `https://oapi.saramin.co.kr/job-search?access-key=${process.env.API_KEY}&id=${id}`,
    headers
  }).then(response => res.json(response.data))
})

module.exports = router;