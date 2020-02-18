export class Courses {
  constructor(
    public name: string,
    public seller_id: string,
    public status: string,
    public description?: string,
    public quantity?: string,
  ) { }
}
