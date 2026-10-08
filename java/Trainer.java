public  class Trainer {
    //fields

    String name;
    String location;
    int age;

    // methods

    void displayinfo() {
        System.out.println("school :" + name);
        System.out.println("location :" + location);
        System.out.println("age :" + age);
    }

    //main function or method

    public static void main(String[] args) {
        //object 1

        Trainer trainer1 = new Trainer();

        //put values in school1
        trainer1.name = "luke academy";
        trainer1.location = "nairobi| wayyaki way";
        trainer1.age = 50;


        //display information
        trainer1.displayinfo();
    }
}



    

