import { Container } from "./container";
console.log(123)
class B {
  num: number
  constructor(num: number) {
    this.num = num
  }
}

class A {
  b: B;
  constructor() {
    this.b = container.get("b")
  }
}


const container = new Container()
container.bind("a", A)
container.bind("b", B, [10])

const a = container.get("a")
console.log(a)