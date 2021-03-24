export interface Category {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: object;

  // constructor(values: Object = {}) {
  //   Object.assign(this, values);
  // }
}
