export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export class Task {

    private id: string;
    private title: string;
    private description: string;
    public status: TaskStatus;

    constructor(id: string, title: string, description: string, status: TaskStatus) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getStatus(): TaskStatus {
        return this.status;
    }

    public setStatus(status: TaskStatus): void {
        this.status = status;
    }
    
}