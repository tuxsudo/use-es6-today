class Mammal {
	constructor() {
		this.blood="warm";
		this.milk=true;
	}
	talk() {
		return "What does the mammal say?"
	}
	static create() {
		return new Mammal();
	}
}
class Human extends Mammal {}