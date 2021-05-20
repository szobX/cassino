import { Response, Request } from "express";
import SocketIO from "socket.io";

export interface IDAOControllerApi {
  create(arg2: Request, arg1: Response): any;
  findAll(rew: Request, res: Response): any;
}

export interface IControllerAPi {
  create(arg2: Request, arg1: Response): any;
  list(rew: Request, res: Response): any;
}

export interface ICustomSocketIo extends SocketIO.Socket {
  userId: string;
}
