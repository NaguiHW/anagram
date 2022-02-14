import { anagram } from "."

describe("Test a list if contains anagrams and separate them.", () => {
	it("It has to be equal to: [['rope', 'pore', 'repo'], ['red rum', 'murder'], ['listen', 'silent'], ['endeavour']]", () => {
		const test = anagram(['rope', 'pore', 'repo', 'red rum', 'murder', 'listen', 'silent', 'endeavour']);
		expect(test).toEqual([['rope', 'pore', 'repo'], ['red rum', 'murder'], ['listen', 'silent'], ['endeavour']]);
	});
});
