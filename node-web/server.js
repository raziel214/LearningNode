//obtain http module for create the server
const http = require('http')
//create the server and assign to const
const server = http.createServer()

const isValidMethod = (req, method) => {
  return req.method === method ? true : false
}

const isValidUrl = (req, url) => {
  return req.url == url ? true : false
}

const getWeekDay = date => {
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const message = 'Your were born on'
  return `${message} ${weekDays[date.getDay()]}`
}

//handle events
server.on('request', (request, response) => {
  const okMethod = isValidMethod(request, 'POST')
  const okUrl = isValidUrl(request, '/challenge')
  const content = { 'Content-Type': 'text/plain' }
  if (okMethod && okUrl) {
    let body = new Array()
    //handle data
    request
      .on('data', chunk => {
        /*chunk is the data that we sent 
         in the request*/
        body.push(chunk)
      })
      .on('end', () => {
        //now body contains your birth date
        body = Buffer.concat(body).toString()
        let birthDate = new Date(body)
        response.writeHeader(200, content)
        response.end(getWeekDay(birthDate))
      })
  } else {
    response.writeHeader(400, content)
    response.end('404 not found :C')
  }
})

server.listen(8002)
console.log('running on http://localhost:8002/challenge')
/*
in posttman try with your birthdate
like yyyy mm dd
1994 12 09
*/