class School{
    constructor(name,level,numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set numberOfStudents(newNumberOfStudents){
        if(typeof newNumberOfStudents==='number'){
            this._numberOfStudents = newNumberOfStudents;
        }else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level}.`);
    }

    static pickSubstituteTeacher(substituteTeachers){

    }
}

class PrimarySchool extends School{
    constructor(name,){
        super(this.name);
    }
}