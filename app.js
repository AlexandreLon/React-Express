import express from 'express'
import edge from 'edge.js'
import path from 'path'
import indexRouter from './routes'

const app = express();

edge.registerViews(path.join(__dirname, './views'))

edge.configure({
  cache: process.env.NODE_ENV === 'production'
})

app.use(express.static('./dist'))

app.use('/', indexRouter);

// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});