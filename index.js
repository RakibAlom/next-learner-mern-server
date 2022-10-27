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

app.get('/courses/check-out/:id', (req, res) => {
  const id = req.params.id;
  const course = courses.find(item => item.id == id)
  res.send(course)
})

app.get('/blog', (req, res) => {
  res.send(blogs)
})

app.get('/blog/:slug', (req, res) => {
  const slug = req.params.slug;
  const blog = blogs.find(item => item.slug === slug)
  res.send(blog)
})

app.listen(port, () => {
  console.log(`Next Learner Server Running on PORT: ${port}`)
})