import {WebSocketServer} from "ws";
import { client } from "@repo/prisma/client";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  client.user.create({
    data: {
      username: "test",
      password: "test",
    },
  });

  ws.send("Hello World");   
});

