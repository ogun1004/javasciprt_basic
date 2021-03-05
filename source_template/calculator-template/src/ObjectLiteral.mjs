var MyObj = {
    name : "Ogun",
    fname : "Kwon"
};

var rectObj = {
    x : 13,
    y : 20
};

rectObj.color = "green";

console.log(MyObj.name);
console.log(rectObj.x);
console.log(rectObj.y);
console.log(rectObj.color);

let a = rectObj.aaa || "AAA";

console.log(a);

delete rectObj.color;

console.log(rectObj.color);

//Literal로 객체 생성 --> instance 하나가 만들어 짐.
var customer = {
    id : "A13",
    name : "Kwon",
};

//순회
for (const key in customer) {
    console.log(key);

}

//생성자함수로 객체 생성 --> 여러개의 instance를 만들 수 있음.
let Person = function (name, id) {
    this.name = name; 
    this.id = id;
};

let person01 = new Person("Jone", "A111");
let person02 = new Person("Jane", "A122");
console.log(person01);
console.log(person02);

//member추가도 가능
person01.age = 30;
console.log(person01);

///구조분해할당 (같은 이름에 할당)
let {name, id} = person02;
console.log(name, id);

// Class문법으로 객체 생성 ES6부터
class PersonC {
    constructor (name, id) { 
        this.name=name;
        this.id=id;
    }

    toString(){
        return this.name;
    }
};

let person03 = new PersonC("Kwon", "A3333");
console.log(person03);
console.log(person03.toString());


