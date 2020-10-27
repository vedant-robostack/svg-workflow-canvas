import { Node } from './Node';
import { v4 as uuidv4 } from 'uuid';

export class Connection {
  public id: string = '0';
  public from: Node;
  public to: Node;
  public selected: boolean = false;

  constructor(from: Node, to: Node, id?: string) {
    this.from = from;
    this.to = to;
    this.id = id ? id : uuidv4() + '';
  }

  clone() {
    const conn = new Connection(this.from, this.to, this.id);
    conn.selected = this.selected;
    return conn;
  }
}
