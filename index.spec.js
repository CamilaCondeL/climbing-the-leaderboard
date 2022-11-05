const { evalueRank } = require('./index');

describe('tests the evaluation of rank', () => {

	it("returns list of ranks", () => {
		const res = evalueRank([1]);
		expect(res).toEqual([1]);
	});
});