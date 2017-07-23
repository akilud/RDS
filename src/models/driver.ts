/**
 * A generic model
 */
export class Driver {

  constructor(private fields: any) {
    //extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }
  }

}
