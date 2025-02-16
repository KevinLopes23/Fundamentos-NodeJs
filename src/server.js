import http from 'http'


const users = []





// Criando um server HTTP usando o createServer do módulo http  
const server = http.createServer((req, res) =>{
    const { method, url } = req

    if(method === 'GET' && url == '/users'){
      return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users));
    }


    if(method == 'POST' && url =='/users'){
        users.push({
            id: 1,
            name:'John Doe',
            email:'johndoe@example.com'
        })

        return res.writeHead(201).end()
    }

    
    return res.writeHead(404).end()
})

server.listen(3333)