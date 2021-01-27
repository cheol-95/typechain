// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

class Human {
  public name: string;
  private age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    // constructor -> 클래스가 생성 될때마다 실행되는 함수
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person = {
  name: 'cheol',
  gender: 'male',
  age: 22,
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

export {};
