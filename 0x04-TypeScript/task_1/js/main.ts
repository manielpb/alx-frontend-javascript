interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; 
}

interface Director extends Teacher {
  numberOfReports: number; 
}

//interface function
interface printTeacherFunction{
  (firstName: string, lastName: string): string;
}


function printTeacher({ firstName, lastName }: { firstName: string, lastName: string }): string{
  return `${firstName}. ${lastName}`
}

interface StudentClassInterface{
  firstName: string;
  lastName: string;
}

class StudentClass{

  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  firstName: string;
  lastName: string;

  workOnHomework(): string{
    return 'Currently working'
  }

   displayName(firstName: string): string{
    return `${firstName}`
   }
}