export default interface FormApi {
  clear(): void;
  destroy(): void;
  each(fn: Function, scope?: Object): void;
  get(name?: string): object|any;
  getHeight(): number;
  getItem(name: string): object|any;
  getSubTitle(): string;
  getTitle(): string;
  getValues(): object;
  hide(): void;
  hideBar(bar: 'tbar'|'subtbar'|'bbar'|'buttons'): void;
  nextTab(): void;
  on(eventName: string, handler: Function, scope?: object): void;
  once(eventName: string, handler: Function, scope?: object): void;
  prevTab(): void;
  remove(name: string|number): void;
  set(key: string, value: any): void;
  set(values: object): void;
  setActiveTab(value: number): void;
  setHeight(value: number): void;
  setSubTitle(value: string): void;
  setTitle(value: string): void;
  setWidth(value: number): void;
  show(): void;
  showAt(x: number, y: number): void;
  showBar(bar: 'tbar'|'subtbar'|'bbar'|'buttons'): void;
  submit(params?: object): void;
  un(eventName: string, handler: Function): void;
  valid(): boolean;
}