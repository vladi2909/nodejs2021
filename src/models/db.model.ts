import { IBoard } from "./board.model";
import { ITask } from "./task.model";
import { IUser } from "./user.model";

export interface IDB {
  users: IUser[];
  boards: IBoard[];
  tasks: ITask[];
}
