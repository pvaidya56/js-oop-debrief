class medicalWorker {
    constructor(first, last, age, hairColor){
        this.first = first;
        this.last = last;
        this.age = age;
        this.hairColor = hairColor;
    }

    myName(){
        console.log(this.first + " " + this.last + " and i am " + this.age)
    }
}


class nurse extends medicalWorker{
    constructor(first, last, age, hairColor){
        super(first, last, age, hairColor);
        this.degree = "Nursing Degree"
    }

    myDegree(){
        console.log("My degree is a " + this.degree)
    }
}


class doctor extends medicalWorker{
    constructor(first, last, age, hairColor){
        super(first, last, age, hairColor);
        this.foods = []
    }

    addFoods(food){
        this.foods.push(food);
    }
}



const doc1 = new doctor("John", "Doe", 32, "black");
console.log(doc1)
doc1.addFoods("Sushi");

console.log(doc1.foods)


const nur1 = new nurse("john", "doe", 25, "Blonde")
console.log(nur1)
console.log(nur1.myName())
console.log(nur1.myDegree())