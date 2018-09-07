import {printStars} from './hw1.js';

describe("hw1", () => {
	it("should return a single star when n = 1",() => {
		expect(printStars(1)).toEqual("*");
	})
	it("should return a single star when n = 3",() => {
		expect(printStars(3)).toEqual("*\n*\n*");
	})
	it("should return a single star when n = 10",() => {
		expect(printStars(10)).toEqual("*\n*\n*\n*\n*\n*\n*\n*\n*\n*");
	})
})