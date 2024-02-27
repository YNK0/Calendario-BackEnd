export enum Status {
  CONFIRMED = 'CONFIRMED',
  PENDING = 'PENDING',
}

export class CitaStructure {
  private id: string;
  private motivo: string;
  private nombre: string;
  private date: Date;
  private time: string;
  private place: string;
  private confirmed: Status;
  private phone: string;

  constructor(
    id: string,
    motivo: string,
    nombre: string,
    date: Date,
    time: string,
    place: string,
    confirmed: Status,
    phone: string,
  ) {
    this.id = id;
    this.motivo = motivo;
    this.nombre = nombre;
    this.date = date;
    this.time = time;
    this.place = place;
    this.confirmed = confirmed;
    this.phone = phone;
  }

  public getId(): string {
    return this.id.toString();
  }

  public getMotivo(): string {
    return this.motivo;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getDate(): Date {
    return this.date;
  }

  public getTime(): string {
    return this.time;
  }

  public getPlace(): string {
    return this.place;
  }

  public getConfirmed(): Status {
    return this.confirmed;
  }

  public getPhone(): string {
    return this.phone;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public setMotivo(motivo: string): void {
    this.motivo = motivo;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public setDate(date: Date): void {
    this.date = date;
  }

  public setTime(time: string): void {
    this.time = time;
  }

  public setPlace(place: string): void {
    this.place = place;
  }

  public setConfirmed(): void {
    this.confirmed = Status.CONFIRMED;
  }

  public setPhone(phone: string): void {
    this.phone = phone;
  }
}
