
const server = Bun.serve<{ authToken: string; }>({
  fetch(req, server) {
    
    server.upgrade( req, {
      data: { authToken: 'Algun-token' },
    } );

    return new Response('Websocket server', {
      headers: { "content-type": "text/html" },
    });
  },
  websocket: {
    open(ws) {
      console.log('Client connected');

      ws.subscribe('global-server-chat');


    },
    close(ws) {
      console.log('Client disconnected');
    },
    async message(ws, message) {
      console.log(`Received: ${message}`);
      // ws.send(`You said: ${message}`);
      ws.publish('global-server-chat', message);
      
    },
  },
});

console.log(`Listening on localhost:${server.port}`);