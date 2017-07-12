var S  = require('string');

class PersonalDetails {

  constructor(){
    this.firstName = "Jean";
    this.middleName = "Luc";
    this.lastName = "Picard";

  }

  build(json) {
      if(json&&json.id&&json.userId){
      this.id = json.id;
      this.userId = json.userId;
      this.firstName = json.firstName;
      this.middleName = json.middleName;
      this.lastName = json.lastName;
      this.dob.day = json.dob.day;
      this.dob.month = json.dob.month;
      this.dob.year = json.dob.year;
      this.gender = json.gender;
      this.firstLang = json.firstLang;
      this.secondLang = json.secondLang;
      this.thirdLang = json.thirdLang;
      this.bloodGroup = json.bloodGroup;
      this.email = json.email;
      this.nationality = json.nationality;
      this.religion = json.religion;
      this.phoneMob = json.phoneMob;
      this.phoneOff = json.phoneOff;
      this.phoneRes = json.phoneRes;
    }
  }

  validate(){
    return true;
  }

  get formattedName(){
    var name = this.firstName+" "+this.middleName+" "+this.lastName;
    return S(name).isEmpty()?"000":name;
  }
l
  get formattedDOB(){
      return `${this.dob.day} - ${this.dob.month} - ${this.dob.year}`;
  }

}

export default PersonalDetails;
