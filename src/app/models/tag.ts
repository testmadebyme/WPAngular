export interface Tag {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    meta: object;
  
    // constructor(values: Object = {}) {
    //   Object.assign(this, values);
    // }
}
