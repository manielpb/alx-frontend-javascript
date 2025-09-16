interface DirectorInterface{
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface{
  workFromHome(){
    return "Working from home";
  }

  getCoffeeBreak(){
    return "Getting a coffee break";
  }

  workDirectorTasks(){
    return "Getting to director tasks ";
  }

}

class Teacher implements TeacherInterface{
  workFromHome(){
    return " Cannot work from home";
  }

  getCoffeeBreak(){
    return "Cannot have a break";
  }

  workTeacherTasks(){
    return "Getting to work";
  }
}

function createEmployee({salary}: {salary: number | string}): Teacher | Director{
    if(typeof salary === "number"){
        if (salary < 500){
            return new Teacher();
        }
    }
  return new Director();
} 

type Subjects:string = "Math" | "History";

function teachClass(todayClass): string{
  if(todayClass === "Math"){
    return "  Teaching Math "
  } else {
    return " Teaching History "
  }
}