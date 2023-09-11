import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO as taskDTO, UpdateTaskDTO } from '../dto/task.dto';

@Controller()
export class TaskController {
    constructor(private taskservice: TaskService) { }

    @Get()
    async getAll() {
        console.log("Get All Metod")
        return this.taskservice.getAll();
    }

    @Post()
    async createTask(@Body() newTask: taskDTO) {
        console.log("Post Metod id: ",newTask)
        return this.taskservice.createTask(newTask.title, newTask.description);
    }

    @Get(':id')
    async getOne(@Param("id") id: string) {
        console.log("Get Metod id: ",id)
        return this.taskservice.getOne(id);
    }

    @Delete(':id')
    async delete(@Param("id") id: string) {
        console.log("Delete Metod id:",id)
        return this.taskservice.delete(id);
    }

    @Put()
    async update(@Body() updatedTask: UpdateTaskDTO ) {
        console.log("Put Metod",updatedTask);
        return this.taskservice.update(updatedTask);
    }
}
