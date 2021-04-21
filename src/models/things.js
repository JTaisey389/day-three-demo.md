'use strict';

class FirstClassModel {
  constructor() {
    this.id = 0;
    this.db = []; // this represents an in memory database, we just hold stuff in an array
  }

  // app.post('/people', (req, res) => {
// thingsModel.create(req.body);
  // })

  create(obj){
    //save the new pbkect to the "DB" here
    let record = {
      id: ++this.id,
      record: obj
    }
    this.db.push(record);
    return record;
  }

  read(id){
    // save the new object to the "db" here
    if (id) {
      return this.db.find(record => record.id === id); // returning this.db and find a record but specifically it looks for an id that matches the specifc id
    } else {
      return this.db;
    }
  }

  // [{ id: 2, { name: ' brian}}] 
  update(id ,obj){
    // update an item in the "db" with a new item
    // PLACEHOLDER
    if (id) {
      return obj;
    }
  }

  delete(id){
    // find an item in the "db" with a new item
    // PLACEHOLDER
    //  delete/continue are keywords
    if (id) {
      return obj;
    }
  }
}

module.exports = FirstClassModel;