const express = require('express')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')
const path = require('path')

app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json())
const http = require('http').createServer(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:4200', 'http://localhost:4200'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

const stayRoutes = require('./api/stay/stay.routes.js')

// routes
app.use('/api/stay', stayRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3030
http.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})