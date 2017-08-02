# Introduction to TypeScript & Modules
Welcome to meeting 2! We're going over TypeScript and Modules!

## WTF is TypeScript?
TypeScript is a superset of JavaScript. It allows you to write the latest JavaScript code, but with types.

This means that you're able to enforce types with all functions, methods, variables, etc.

For example:
```javascript
let a = 5;
a = "Not 5";
```
The above example works in JavaScript, but may cause unwanted side-effects.

```typescript
let a: number = 5;
a = "Not 5"; //ERROR!!!
```
The above example doesn't work compile-time because you defined `a` as a number, then tried to reassign the number to a string. That doesn't work!

### What does TypeScript introduce?
* Strongly Typed language
* Interfaces
* Types
* Classes
* Type and parameter enforced functions/methods
* Type inference

#### Type Inference
```typescript
let num = 5;
num = "Not num"; //ERROR!!!
```
The above gives you an error because TypeScript assumes that your number will keep its type once assigned.

This works also for non-primitive types!
```typescript
let obj = {
    param1: 3
};
console.log(obj.param2); //ERROR!!
obj.param2 = 4; //ERROR!!
```
Once an object is created without a type, it assumes the object won't add any additional parameters. So, when we try to modify/read param2, TypeScript says the property doesn't exist on the object.

### Why TypeScript?
The number one reason is to reduce the developer-caused errors. TypeScript makes sure every code written is intended to have the specific type. 

This can be abused by using the `any` type, but should only be used in specific cases.

Note: TypeScript has all of the same features ES2015 does such as classes, arrow functions, `let`, etc.

### Methods
```typescript
class Car {
    constructor(speed: number, wheels: number) {
        console.log(speed);
        console.log(wheels);
    }
}
let car: Car = new Car(); //ERROR!! Required two params
let car: Car = new Car("three", "four"); //ERROR!! Wrong types
let car: Car = new Car(30,4);
```

```typescript
class Car {
    constructor(speed: number, wheels: number) {
        console.log(speed);
        console.log(wheels);
    }
    myMethod() {
        //belongs to Car class
    }
}
```

`myMethod` belongs to the `Car` class. We don't have to put `this` in front. TypeScript just assumes that it belongs to the `Car` class. The return type is also inferred from what is returned if anything at all.

### Member Variables
```typescript
class Car {
    speed: number;
    wheels: number;
    constructor(newSpeed: number, newWheels: number) {
        this.speed = newSpeed;
        this.speed = newWheels;
    }
}
```

**Note: You must define every member variable you want to use**

If you don't want to manually set the member variables equal to the constructor values, you can do this:
```typescript
class Car {
    constructor(private speed: number, private wheels: number) { }
}
```
As long as you give an access modifier, TypeScript will fill the values of the member variables as passed in.

### `this` context
Just use `this` normally!


### Modules
Each file is treated as a module as long as it exports something.

```typescript
//car.ts
export class car {
    constructor(private speed: number, private wheels: number) { }
}
//driver.ts
import { Car } from './car';
export class Driver {
    constructor(private car: Car) {
    }
}
```
The above example has two modules `car.ts` and `driver.ts`. Both are modules because something has been `exported` from each file.

**Note: Modules can only be imported if they have been exported in their respective files**
```typescript
//car.ts
class car {
    constructor(private speed: number, private wheels: number) { }
}
//driver.ts
import { Car } from './car'; //NOPE
export class Driver {
    constructor(private car: Car) {
    }
}
```
The above doesn't work because `Car` hasn't been exported from `car.ts`

**Note: You can only access variables/methods/classes from other files if they are exported**

```typescript
...
//../models/person-type.ts
export enum PERSON_TYPE {
    DRIVER, PASSENGER
}
//./person.ts
import { PERSON_TYPE } from '../models/person-type';
class Person {
    constructor(private type: PERSON_TYPE) { }
}
```
**Note: when referring to local modules you've created, use relative paths such as `./` or `../`. 
If the modules are from `npm`, you need to use the package name.
If there's no relative path, your module loader will assume it's from `node_modules`.