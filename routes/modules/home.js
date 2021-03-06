const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const generateRandomCode = require('../../tools/generateRandomCode')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/shortened', (req, res) => {
  const { inputURL } = req.body
  let hosturl = req.headers.host
  let randomCode = ''

  URL.find()
    .lean()
    .then(urls => {
      //把資料中所有的urls拿出來比對，是否有相同的url（找到的稱為targetUrl）
      targetUrl = urls.filter(eachUrl => eachUrl.inputURL === inputURL)
      if (targetUrl.length === 1) { //如果有找到，那就取得那個url的randomCode
        randomCode = targetUrl[0].randomCode
      } else { //如果沒找到，就產生一個randomCode
        randomCode = generateRandomCode()
        //檢查產生的randomCode是否確定存在
        while (urls.some(eachUrl => eachUrl.randomCode === randomCode)) {
          randomCode = generateRandomCode()
        }
        //將拿到的inputURL跟randomCode放進url.js model裡
        return URL.create({ inputURL, randomCode })
      }
    })
    .then(() => { //依不同的連線方式，產生不同的短網址
      if (hosturl === 'localhost:3000') {
        shortURL = `http://${hosturl}/${randomCode}`
      } else {
        shortURL = `https://${hosturl}/${randomCode}`
      }
      res.render('index', { inputURL, shortURL })
    })
    .catch(error => console.log(error))

})

router.get('/:randomCode', (req, res) => {
  const randomCode = req.params.randomCode
  //從randomCode來找inputURL，並連線至inputURL
  URL.find({ randomCode: randomCode })
    .lean()
    .then(shortURL => {
      if (shortURL.length === 0) {
        res.redirect('/')
      } else {
        res.redirect(shortURL[0].inputURL)
      }
    })
})


module.exports = router