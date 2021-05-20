import Server from "./server";
import socketIoInit from "socket.io";

const server = new Server(3005);

server.start();
