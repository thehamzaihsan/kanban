import { BoardType } from "./enums";    

export interface TaskModel{
    id:string,
    title:string,
    board:BoardType,
    color:string,
}