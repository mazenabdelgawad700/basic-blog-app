export interface ListItem {
  id: string;
  item: string;
  checked: boolean;
}

export default class List implements ListItem {
  constructor(private _id: string = "", private _item: string = "", private _checked: boolean = false) { }
  // id getter and setter
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
  // description getter and setter
  get item(): string {
    return this._item;
  }

  set item(value: string) {
    this._item = value;
  }

  // checked getter and setter
  get checked(): boolean {
    return this._checked;
  }

  set checked(value: boolean) {
    this._checked = value;
  }
}