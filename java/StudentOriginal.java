public class StudentOriginal {

    // properties
    public String stdName;
    public int age;
    public String admNo;

    //methods

    // constructor
        
    public StudentOriginal(String name, String adm, int age) {
        this.stdName = name; 
        this.admNo = adm;
        this.age = age;
    }

    public void displayStudentInfo() {
        System.out.println("student name:" + stdName);
        System.out.println("age:" + age);
        System.out.println("admission number:" + admNo);
    }
   
    
    public static void main(String[] args) {
        
        //create object1
        StudentOriginal student1 = new StudentOriginal("luke", "DSD|S23|016", 21 );

      /*   //put values in student1
        student1.stdName = "luke";
        student1.age = 21;
        student1.admNo = "DSD|S23|016";*/

        //create object2
        StudentOriginal student2 = new StudentOriginal("mary", "DSD|S23|006", 19);

      /*   //put values in student2
        student2.stdName = "mary";
        student2.age = 19;
        student2.admNo = "DSD|S23|006";*/

        //create object3
        StudentOriginal student3 = new StudentOriginal("tracy", "DSD|S23|046", 18);

      /*  //put values in student3
      student3.stdName = "tracy";
      student3.age = 18;
      student3.admNo = "DSD|S23|046";*/
        
      StudentOriginal student4 = new StudentOriginal("peter", "DSD|S23|146", 25);

        //display information
        student1.displayStudentInfo();
        student2.displayStudentInfo();
        student3.displayStudentInfo();
        student4.displayStudentInfo();


    }
}

//access modifiers/specifire

//two types

//type 1- access modifires
//control access level

//1.public-accessible for all classes
//2.private-only accessible within the declaired class
//3.default-automatic when specifire is not defined
//4.protected

//classes can only use default and public modifires,while attributes and methods can take the rest of the modifires

//type2-non-access modifire
//do not control access level

//1.static-
//2.final-used for constants
//3.abstract-

//encapsulation-
    
    
    

//instatiation-the process of creating an objec from a class

