import { FancyInterface } from "./fancy-interface";

class FancyImplementation implements FancyInterface {
	public test() {
		console.log('Test');
	}
}

const fancyMe = new FancyImplementation();
fancyMe.test();