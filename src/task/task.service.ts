import { Injectable } from '@nestjs/common';
import { Status, CitaStructure } from './task.entity';
import { v1 as uuid } from 'uuid';
import {CitaDTO} from '../dto/task.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

@Injectable()
export class TaskService {

    //Array de task que simula una base de datos
    private citas: CitaStructure[] = [];

    
}
