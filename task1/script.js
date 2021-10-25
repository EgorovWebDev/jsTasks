 class Animal {

	sayHi() {
		console.log(this.message)
	}

 }

 class Cat extends Animal {

	constructor(message) {
		super();
		this.message=message
	}

 }


 class Dog extends Animal {

	constructor(message) {
		super();
		this.message=message
	}

 }
  const cat = new Cat("мяу")
  // const dog = new Cat("гав")
 
	// cat.sayHi()
	// dog.sayHi()