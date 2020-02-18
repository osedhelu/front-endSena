export class Usuarios {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public password_confirmation: string,
    public img?: string,
    public verified?: string,
    public role?: string,
    public id?: number
  ) { }
}
