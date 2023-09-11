import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v1 as uuid } from 'uuid';
import {UpdateTaskDTO} from '../dto/task.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

@Injectable()
export class TaskService {

    //Array de task que simula una base de datos
    private tasksList: Task[] = [
        new Task("1", 'Task 1', 'Description 1', TaskStatus.OPEN),
    ];

    taskFinder = (id: string) => {
        const task = this.tasksList.find(task => task.getId() === id);
        if (!task) {
            return null;
        }
        return task;
    }

    //Metodo para obtener todas las task
    getAll() {
        return this.tasksList;
    }

    //Metodo para crear una task
    createTask(title: string, description: string) {
        const task: Task = new Task(uuid(), title, description, TaskStatus.OPEN);
        this.tasksList.push(task);
        return task;
    }

    //Metodo para obtener una task por id
    getOne(id: string) {
        const task = this.taskFinder(id);
        if (!task) {
            throw new HttpException('TASK NOT FOUND', 404);
        }
        return task;
    }

    //Metodo para eliminar una task por id
    delete(id: string) {
        if (!this.taskFinder(id)) {
            throw new HttpException('TASK NOT FOUND', 404);
        }
        this.tasksList = this.tasksList.filter(task => task.getId() !== id);
        return `Task ${id} deleted`;
    }

    //Metodo para actualizar una task por id
    update(task: UpdateTaskDTO) {
        const updatedTask = this.getOne(task.id);
        updatedTask.setTitle(task.title);
        updatedTask.setDescription(task.description); 
        updatedTask.status = task.status;
        return updatedTask;
    }
    
}
