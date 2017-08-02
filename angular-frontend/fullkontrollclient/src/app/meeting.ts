export class Meeting {
  shorthand: string;
  constructor(
    public id: number,  
    public meeting_category: number,
    public entity: number,
    public requested_meetdate: number
 // this.shorthand = this.meeting_category + this.entity;
  ){}  
}
