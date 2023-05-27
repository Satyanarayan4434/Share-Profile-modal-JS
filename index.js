const obj ={
    name : "satya",
    age : 30,
    greet(){
        console.log(`my name is this.name and age {this.age}`);
    }
}

const result = obj.greet;
result();