class Resume {
    constructor(_name, _surname, _age, _experience, _skills) {
        this.name = _name
        this.surname = _surname
        this.age = _age
        this.experience = _experience
        this.skills = _skills
    }

    getFullName(){
        return this.name + " " + this.surname + " " + this.age
    }

    getExperince(){
        if(this.experience > 5){
            return "Good experince";
        }
        else if(this.experience > 2 || this.experience < 5){
            return "Normal experince";
        }
        else{
            return "Bad experince";
        }
    }

    getSkills(){
        for(let i = 0; i < this.skills.length; i++){
            if(this.skills[i] === "JS" || this.skills[i] === "HTML" || this.skills[i] === "CSS"){
                return "Frontend Developer";
            }
            else if(this.skills[i] === "Python" || this.skills[i] === "Django"){
                return "Backend Developer";
            }
            else{
                return "No developer, hahahahah!!"
            }
        }
    }
}

let employee1 = new Resume("Muhammed", "Gardashov", 20, 3, ["JS", "HTML", "CSS"]);
console.log(employee1.getExperince(), " " ,employee1.getSkills());