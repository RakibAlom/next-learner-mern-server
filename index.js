const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
const port = process.env.PORT || 5000

const courses = require('./data/courses.json')
const blogs = require('./data/blogs.json')

app.get('/', (req, res) => {
  res.send('Next Learner Server Running...')
})

app.get('/courses', (req, res) => {
  res.send(courses);
})

app.get('/courses/:slug', (req, res) => {
  const slug = req.params.slug;
  const course = courses.find(item => item.slug === slug)
  res.send(course)
})

app.get('/blogs', (req, res) => {
  res.send(blogs)
})

app.listen(port, () => {
  console.log(`Next Learner Server Running on PORT: ${port}`)
})