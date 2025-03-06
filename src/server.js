import http from 'node:http'


const users = []

const server = http.createServer((req, res)=>{

  const {method, url} = req

  if (method === 'GET' && url === '/users'){
    return res.end('Rota de listagem de usuários' + JSON.stringify(users))
  }

  if(method === 'POST' && url === '/users'){
    users.push({
      id: 1,
      name: 'carinha q mora logo ali',
      email: 'emaildocarinha@gmail.com'
    })
    return res.end('Rota de criação de usuários')
  }


  return res.end('Hello World')
})

server.listen(3333)