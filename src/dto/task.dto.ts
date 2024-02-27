import { Status } from '../task/task.entity';
import { IsNotEmpty, IsString, IsIn, IsNumber, IsDate } from 'class-validator';

export class CitaDTO {
  @IsNotEmpty()
  id: string;
  @IsString()
  @IsNotEmpty()
  motivo: string;
  nombre: string;
  @IsNotEmpty()
  date: Date;
  @IsString()
  @IsNotEmpty()
  time: string;
  place: string;
  @IsIn([Status.CONFIRMED, Status.PENDING])
  confirmed: Status;
  @IsString()
  @IsNotEmpty()
  phone: string;
}
