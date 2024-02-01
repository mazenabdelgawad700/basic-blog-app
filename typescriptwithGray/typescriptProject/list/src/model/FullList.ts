import { ListItem } from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  // list items getter and setters
  get list(): ListItem[] {
    return this._list;
  }
  // set list(value: ListItem[]) {
  //   this._list = value;
  // }

  static instance: FullList = new FullList();
  private constructor(private _list: ListItem[] = []) { };

  load(): void {
    console.log("Load");
  }
  save(): void {
    console.log("Save");
  }

  addItem(itemObj: ListItem): void {

  }
}