import view from '@fastify/view';
import pug from 'pug';
import data from '../data.js';
import path from 'path';


export default async function (fastify, opts) {
  await fastify.register(view, {
    engine: {
      pug
    },
    root: path.resolve('src/views')
  })
  
  fastify.get('/', async function (request, response) {
    return 'Hellow world'
  })
  fastify.post('/', async function (request, response) {
    return 'Hellow worldddddd'
  })
  fastify.get('/users/', async function (request, response) {
    return 'Hellow users'
  })
  fastify.get('/hello', async function (request, response){
    const name = request.query.name
    if(!name) return 'Hellow world'
    return `Hellow ${name}`
  })
  fastify.get('/user/:id/post/:postid', async function (request, response){
    const userId = request.params.id
    const postId = request.params.postid
    
    return 'Это пользователь ' + userId + ' и пост ' + postId
  })
  fastify.get('/courses', (req, res) => res.view('courses', { courses: data.courses }));
  fastify.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const course = data.courses.find((course) => course.id === Number(id))
    console.log(data)
    return res.view('course', { course })
  })
  
  
  
}
