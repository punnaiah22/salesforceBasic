import { LightningElement } from 'lwc';
import Toast from 'lightning/toast';
export default class StudentEnrollmentLWC extends LightningElement {
    stuName;
    stuPhone;
    stuEmail;
    stuEducation;
    //This array is used to store multiple student objects.
    studentData=[]; 
    //This array is used to store multiple phone numbers.
    studentPhoneNumber=[];


    handleNamechange(event){
        this.stuName=event.target.value;
    }

    handlePhonechange(event){
        this.stuPhone=event.target.value;
    }


    handleEmailchange(event){
        this.stuEmail=event.target.value;
    }

    handleEducationchange(event){
        this.stuEducation=event.target.value;
    }


    handlePhoneMouseout(event){
        if(this.stuPhone.includes('+1')){
            Toast.show(
            {
                label: "Invalid phone Number",
                message: "Phone number should not contain country code and any special char",
                variant: "Error",
                mode: "dismissible",
            },
            this,
        );
        }

        if(this.stuPhone.length < 10) {
            Toast.show(
            {
                label: "Invalid phone Number",
                message: "Phone number should be 10 digits only",
                variant: "Error",
                mode: "dismissible",
            },
            this,
        );
        }
    }
    handleClick(){
        console.log("Submit button Clicked");
    }

    addMoreData(event){
       var studentData={name: this.stuName, phone: this.stuPhone, email: this.stuEmail, education: this.stuEducation};
       //console.log(JSON.stringify(studentData));
    
      this.studentData.push(studentData);
      this.studentPhoneNumber.push(this.stuPhone)
      alert(JSON.stringify(studentData));
      alert(JSON.stringify(studentPhoneNumber));
      //console.log(JSON.stringify(studentData));

    
    }


}