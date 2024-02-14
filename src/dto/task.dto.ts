import { Status } from "../task/task.entity";
import { IsNotEmpty, IsString, IsIn, IsNumber, IsDate } from "class-validator"

export class CitaDTO {  
    @IsNotEmpty()
    @IsNumber()
    id: string;
    @IsString()
    @IsNotEmpty()
    motivo: string;
    nombre: string;
    @IsDate()
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
