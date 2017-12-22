export class User {
  constructor(
    public email: string,
    public password: string,
    public firts_name?: string,
    public last_name?: string
  ) { }

  fullName() {
    return `${this.firts_name} ${this.last_name}`;
  }
}
