const http = require("http");
const webSocketServer = require("websocket").server
let connection = null;

const httpserver= http.createServer ((req,res) =>
       console.log("we have received a request")



)

const websocket = new webSocketServer({

"httpServer": httpserver
})

websocket.on(("request", request=> {

   connection = request.accept(null, request.origin)
   connection.on("onopen", () => console.log("opened!"))
   connection.on("onclose", () => console.log("closed!"))
   connection.on("onmessage", function (message) {

           console.log(`received message ${message}`);
       })
   
}))


httpserver.listen(8080, () => console.log("my server is listening on port 8080"))