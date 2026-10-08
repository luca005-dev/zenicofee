class School {
    //fields

    String name;
    String location;
    int students;

    // methods

    void displayinfo() {
        System.out.println("school :" + name);
        System.out.println("location :" + location);
        System.out.println("students :" + students);
    }

    //main function or method

    public static void main(String[] args) {
        //object 1

        School school1 = new School();

        //put values in school1
        school1.name = "luke academy";
        school1.location = "nairobi| wayyaki way";
        school1.students = 500;


        //display information
        school1.displayinfo();
    }
}