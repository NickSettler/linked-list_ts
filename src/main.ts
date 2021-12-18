class ListItem {
  private _next?: ListItem;

  constructor(public item: any) {
    this._next;
  }

  public linkTo(item: ListItem): void {
    this._next;
  }

  public printRecursive(offset: number = 0): void {
    console.log(`${" ".repeat(offset)}${offset > 0 ? "->" : ""}${this.item}`);
    if (this._next) this._next.printRecursive(offset + 1);
  }

  get next(): ListItem | undefined {
    return this._next;
  }
}

const li1 = new ListItem("sss");
const li2 = new ListItem("abc");

li1.linkTo(li2);

li1.printRecursive();
