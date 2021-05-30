import { User } from "./user.model";
import { Board } from "./board.model";
import { Task } from "./task.model";

export interface DB {
    users: User[];
    boards: Board[];
    tasks: Task[];
}