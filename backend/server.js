const app = require('../app');
const http = require('http');

const port = 3000;
app.set('port', port);

const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.on('chat message', (message) => {
      socket.broadcast.emit('chat message', message);
    });
  });

server.listen(port);