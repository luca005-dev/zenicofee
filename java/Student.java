public class Student {
    String name;
    int age;
    String grade;

   /* public Student(String name, int age, String gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
*/
    public void displayDetails() {
        System.out.println("Student Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Grade: " + grade);
    }

     public String upgradeGrades(String newGrade) {
            grade = newGrade;
            System.out.println("New Grade: " + grade);
            return grade;
        }

    public static void main(String[] args) {
       /*  Student student1 = new Student("Luke", 21, "Male");
        Student student2 = new Student("Mary", 19, "Female");
        Student student3 = new Student("Tracy", 18, "Female");
        Student student4 = new Student("Peter", 25, "Male"); */

        Student student1 = new Student();
        student1.name = "Luke";
        student1.age = 21;
        student1.grade = "C";

        Student student2 = new Student();
        student2.name = "Mary";
        student2.age = 19;
        student2.grade = "B";
        

        Student student3 = new Student();
        student3.name = "Tracy";
        student3.age = 18;
        student3.grade = "A";

        Student student4 = new Student();
        student4.name = "Peter";
        student4.age = 25;
        student4.grade = "B";
     
       


        student1.displayDetails();
        student1.upgradeGrades("B");

        student2.displayDetails();
        student2.upgradeGrades("C");

        student3.displayDetails();
        student3.upgradeGrades("B");

        student4.displayDetails();
        student4.upgradeGrades("A");   
       
        
    }
    
}
