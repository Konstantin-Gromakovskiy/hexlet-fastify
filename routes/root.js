export default async function (fastify, opts) {
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
}
