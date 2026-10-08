\
public class Main{

     public static void main(String[] args) {
    
        Person person1 = new Person();
        person1.name = "Luke";
        person1.setAge(50);

        System.out.println("Name:" + person1.name);
        System.out.println("Age:" + person1.getAge());



    }

}

 class Person {

    public String name;
    private int age;
    //private String idNo;


    public int getAge(){
        return this.age;
    }

    public void setAge(int age){
        this.age = age;
    }
   
}





