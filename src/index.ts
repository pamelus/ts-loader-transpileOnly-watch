import { FancyInterface } from "./fancy-interface";

class FancyImplementantion implements FancyInterface {
	public test() {
		console.log('Test');
	}
}

const fancyMe = new FancyImplementantion();
fancyMe.test();