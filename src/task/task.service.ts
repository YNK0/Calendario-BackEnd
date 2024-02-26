import { Injectable } from '@nestjs/common';
import { Status, CitaStructure } from './task.entity';
import { v1 as uuid } from 'uuid';
import { CitaDTO } from '../dto/task.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { uptime } from 'process';

@Injectable()
export class TaskService {
  private citas: CitaStructure[] = [
    new CitaStructure(
      1,
      'Dolor de cabeza',
      'Juan',
      new Date(),
      '10:00',
      'Hospital',
      Status.CONFIRMED,
      '123456789',
    ),
    new CitaStructure(
      2,
      'Dolor de estomago',
      'Pedro',
      new Date(),
      '11:00',
      'Hospital',
      Status.PENDING,
      '123456789',
    ),
    new CitaStructure(
      3,
      'Dolor de espalda',
      'Maria',
      new Date(),
      '12:00',
      'Hospital',
      Status.PENDING,
      '123456789',
    ),
  ];

  public getAll(): CitaStructure[] {
    return this.citas;
  }

  public createTask(cita: CitaDTO): Boolean {
    cita.date = new Date(cita.date);

    const newCita = new CitaStructure(
      uuid(),
      cita.motivo,
      cita.nombre,
      cita.date,
      cita.time,
      cita.place,
      cita.confirmed,
      cita.phone,
    );
    this.citas.push(newCita);
    return true;
  }

  public delete(id: number): boolean {
    const idx = this.citas.findIndex((cita) => cita.getId() == id);
    if (idx !== -1) {
      this.citas.splice(idx, 1);
      return true;
    }
    return false;
  }

  public update(updatedCita: CitaDTO): boolean {
    updatedCita.date = new Date(updatedCita.date);
    const idx = this.citas.findIndex(
      (cita) => cita.getId() == Number(updatedCita.id),
    );
    if (idx >= 0) {
      this.citas[idx] = new CitaStructure(
        Number(updatedCita.id),
        updatedCita.motivo,
        updatedCita.nombre,
        updatedCita.date,
        updatedCita.time,
        updatedCita.place,
        updatedCita.confirmed,
        updatedCita.phone,
      );
      return true;
    }
    throw new HttpException('Cita no encontrada', 404);
  }

  public confirm(id: number): Boolean {
    const idx = this.citas.findIndex((cita) => cita.getId() == id);
    if (idx === -1) {
      throw new HttpException('Cita no encontrada', 404);
    }
    if (this.citas[idx].getConfirmed() === Status.CONFIRMED) {
      return false;
    }
    if (idx !== -1) {
      this.citas[idx].setConfirmed();
      return true;
    }
    return false;
  }
}
