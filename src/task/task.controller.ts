import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CitaDTO } from '../dto/task.dto';

@Controller()
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAll() {
    return this.taskService.getAll();
  }

  @Post()
  async createTask(@Body() cita: CitaDTO) {
    return this.taskService.createTask(cita);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number) {
    return this.taskService.delete(id);
  }

  @Put()
  async updateTask(@Body() cita: CitaDTO) {
    return this.taskService.update(cita);
  }

  @Get('/confirm/:id')
  async confirmTask(@Param('id') id: number) {
    return this.taskService.confirm(id);
  }
}
