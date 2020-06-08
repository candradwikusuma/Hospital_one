export class Docter {
  constructor(
    public id: string,
    public name: string,
    public specialist: string,
    public img: string,

    public schedule: Array<{
      id: number;
      day: string;
      start: string;
      end: string;
    }>
  ) {}
}
