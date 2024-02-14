export enum Status {
    CONFIRMED = 'CONFIRMED',
    PENDING = 'PENDING'
}

export class CitaStructure {
    private id: number;
    private motivo: string;
    private nombre: string;
    private date: Date;
    private time: string;
    private place: string;
    private confirmed: Status;
    private phone: string;

    constructor (id: number, motivo: string, nombre: string, date: Date, time: string, place: string, confirmed: Status, phone: string) {
        this.id = id;
        this.motivo = motivo;
        this.nombre = nombre;
        this.date = date;
        this.time = time;
        this.place = place;
        this.confirmed = confirmed;
        this.phone = phone;
    }

}