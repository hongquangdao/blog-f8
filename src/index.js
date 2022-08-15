const express = require('express')
const {engine} = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')

const app =  express()

const port = 3000

//static img
app.use(express.static(path.join(__dirname, 'public')))

//morgan: http logger ra sự kiện khi có thay đổi bất kì
app.use(morgan('combined'))

// engine handlebars: giao diện module hóa thành các file có thể dùng html
app.engine('hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', '/views')
app.set('views', path.join(__dirname, 'views'))


// express: Basic routes
app.get('/home', (req, res)=> {
    res.render('home')
})

app.get('/news', (req, res)=> {
    res.render('news')
})

app.get('/aboutme', (req, res)=> {
    res.render('aboutme')
})

app.get('/search', (req, res)=> {
    res.render('search')
})



app.listen(port, () => console.log(`Program is running at port ${port}`))
