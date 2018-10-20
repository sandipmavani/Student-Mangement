// import User from './user'

export class User {
  constructor () {
    this.id = "";
    this.fullname = "";
    this.email = "";
    this.avatar = "";
    this.mobile = "";
    this.homephone = "";
    this.workphone = "";
    this.studentId = "";
    this.passingYear = "";
    this.apc = "";
  }
}


export class Customer extends User {

  constructor () {
    super();
    this.membership = true;
    this.rewards = 0;
    this.orders = [];
  }
}
