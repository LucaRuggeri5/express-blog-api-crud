// dichiaro il framework di express
const express = require('express')
// dichiaro l'istanza di express per utilizzare express stesso
const app = express()
// porta del localhost
const port = 3000
// chiamata di posts.js
const postsRouter = require('./routers/posts')
// rendo statica la cartella public
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/posts', postsRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})