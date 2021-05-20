import helmet from "helmet";
import express from "express";
import http from "http";
import boom from "express-boom";
import socketIoInit from "socket.io";
import { Express } from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import { Socket } from "node:dgram";
import SocketIO from "socket.io";
import { ICustomSocketIo } from "./types";

const Logger = require("./logger");
class Server {
  private app: Express;
  server: any;
  io: any;
  constructor(readonly port: number) {
    this.app = express();
    this.app.use(helmet());
    this.app.use(boom());
    this.app.use(cors());
    this.app.use(
      urlencoded({
        extended: true,
      })
    );
    this.app.use(json());
    // this.start();
    this.server = http.createServer(this.app);
    const activeUsers = new Set();
    //@ts-ignore
    const io: SocketIO = socketIoInit(this.server, {
      cors: {
        origin: "*",
      },
    });
    io.on("connection", (socket: ICustomSocketIo) => {
      console.log("connection");

      socket.on("new user", (data: string) => {
        socket.userId = data;
        console.log("in new user");
        console.log(data);
        activeUsers.add(data);
        io.emit("new user", [...activeUsers]);
      });

      socket.on("spin", () => {
        console.log("on spin");
        io.emit("spin", Math.floor(Math.random() * 14));
      });
      socket.on("disconnect", () => {
        activeUsers.delete(socket.userId);
        console.log("client disconnected");
        io.emit("new user", [...activeUsers]);
      });
    });
  }
  getApp() {
    return this.app;
  }
  start() {
    this.server
      .listen(this.port, () => {
        Logger.info(`
              ################################################
              🛡️  Server listening on port: ${this.port} 🛡️
              ################################################
            `);
      })
      .on("error", (err: any) => {
        Logger.error(err);
        process.exit(1);
      });
  }
}

export default Server;
