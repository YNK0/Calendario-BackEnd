import { TaskStatus } from "../task/task.entity";
import { IsNotEmpty, IsOptional, IsString, IsIn } from "class-validator"

export class CreateTaskDTO {  
    @IsString() 
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;
}

export class UpdateTaskDTO {
    id: string;
    @IsString() 
    @IsNotEmpty()
    @IsOptional()
    title: string;
    @IsString() 
    @IsNotEmpty()
    description: string;
    @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status: TaskStatus;
}