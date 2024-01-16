export class VisitMap<TItem> {
  private map: { [key: string]: boolean } = {};
  private keyGetter: (item: TItem) => string;

  constructor({ keyGetter }: { keyGetter?: (item: TItem) => string } = {}) {
    const defaultKeyGetter = (item: TItem) => String(item);
    this.keyGetter = keyGetter ?? defaultKeyGetter;
  }

  public isVisited(item: TItem): boolean {
    const nodeVisited = this.map[this.keyGetter(item)];

    return nodeVisited;
  }

  public visit(item: TItem) {
    this.map[this.keyGetter(item)] = true;
  }
}
