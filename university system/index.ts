class Person{
    name:string;
    age:number;

    constructor(name:string, age:number ){
        this.name = name
        this.age = age
    }
    getname(){
        return this.name
    }
}

class Student extends Person{
    courses:Course[] = []
    rollNumber:string;
    constructor(name:string, age:number, rollNumber:string){
        super(name,age)
        this.rollNumber = rollNumber
    }
    registercourse(course:Course){
        this.courses.push(course)
    }
}
class instructor extends Person{
   private salary: number 
    course:Course[] = [];
    constructor(name:string, age:number, salary:number){
        super(name, age)
        this.salary = salary

    }
    assingcourse(course:Course){
        this.course.push(course)

    }
}
class Course {
    id : string;
    name: string
    students: Student[]=[];
    Instructor : instructor[]=[];
    constructor(id:string,name:string){
            this.id = id
            this.name = name
    }
    addstudent(student:Student){
        this.students.push(student)
        student.registercourse(this)
    }
    setinstructor(Instructor:instructor){
        this.Instructor.push(Instructor)
        Instructor.assingcourse(this)

    }
}
class department {
    name:string
    course: Course[] = []
    constructor(name:string){
        this.name = name
    }
    addcourses(course:Course){
        this.course.push(course)
    }

}


const teacher1 = new instructor("zia",60,10000)
teacher1

const manaheel1 = new Student("manaheel", 23,"bb26221" )
const manaheel2 = new Student("irtiza", 22,"bb26291" )
const course1 = new Course("As222","calculas")


// course1.addstudent(manaheel1)
// course1.setinstructor(teacher1)
// console.log(course1)
//course1.addstudent(manaheel2)
//console.log(course1.name)
//console.log(manaheel1.courses[0])
//course1.setinstructor(teacher1)
// console.log(course1.Instructor[0].course)
const dep1 = new department("web3")
console.log(dep1)
dep1.addcourses(course1)
console.log(dep1)
//manaheel1.registercourse(course1)
//console.log( manaheel1.courses[0].Instructor)