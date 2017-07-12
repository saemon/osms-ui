import PersonalDetails from "./PersonalDetails";

class User{
  constructor(){
    this.personalDetails = new PersonalDetails();
  }

  build(json){
    if(json&&json.id){
      this.id = json.id; // pkey
      this.passwd = json.passwd; //one way/no read
      this.personalDetails.build(json.personalDetails);
      /*this.resAddressId = null;
      this.resAddress = new Address();
      this.offAddressId = null;
      this.offAddress = new Address();*/
    }
  }

  get formattedName(){
    return this.personalDetails.formattedName;
  }
}


export default User;
