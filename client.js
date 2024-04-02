const express = require('express')
const path = require('path')
const PORT = 4000

const app = express()


app.use(express.static('public'))

app.use('/admin/*',(req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'admin', 'index.html'))
})

app.use('/app/*',(req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'admin', 'index.html'))
})


app.listen(PORT, () => {
    console.log('Client Server Running!')
})