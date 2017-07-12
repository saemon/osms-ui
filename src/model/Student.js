
import User from "./User";

class Student extends User{

  build(json) {
    if(json){
      super.build(json);
      this.rollnumber = json.rollnumber;
      this.class = json.class;
      this.section = json.section;
    }
  }
}

export default Student;
