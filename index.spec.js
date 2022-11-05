const { evalueRank } = require('./index');

describe('tests the rank array', () => {

	it("returns list of ranks", () => {
		const res = evalueRank([100]);
		expect(res).toEqual([1]);
	});

	it("returns list of ranks of 2 different numbers array", () => {
		const res = evalueRank([100, 90]);
		expect(res).toEqual([1, 2]);
	});

	it("returns list of ranks of 2 equal numbers array", () => {
		const res = evalueRank([100, 100]);
		expect(res).toEqual([1, 1]);
	});

	it("returns list of ranks of 3 different numbers array", () => {
		const res = evalueRank([100, 90, 80]);
		expect(res).toEqual([1, 2, 3]);
	});

	it("returns list of ranks of 3 different numbers array", () => {
		const res = evalueRank([100, 90, 90]);
		expect(res).toEqual([1, 2, 2]);
	});

	it("returns list of ranks of 3 different numbers array", () => {
		const res = evalueRank([100, 100, 80]);
		expect(res).toEqual([1, 1, 2]);
	});

	it("returns list of ranks of 3 different numbers array", () => {
		const res = evalueRank([100, 100, 100]);
		expect(res).toEqual([1, 1, 1]);
	});

	it("returns list of ranks of 4 different numbers array", () => {
		const res = evalueRank([100, 90, 80, 70]);
		expect(res).toEqual([1, 2, 3, 4]);
	});

	it("returns list of ranks of 4 different numbers array", () => {
		const res = evalueRank([100, 90, 80, 80]);
		expect(res).toEqual([1, 2, 3, 3]);
	});

	it("returns list of ranks of 4 different numbers array", () => {
		const res = evalueRank([100, 90, 90, 70]);
		expect(res).toEqual([1, 2, 2, 3]);
	});

	it("returns list of ranks of 4 different numbers array", () => {
		const res = evalueRank([100, 90, 90, 90]);
		expect(res).toEqual([1, 2, 2, 2]);
	});

	it("returns list of ranks of 4 different numbers array", () => {
		const res = evalueRank([100, 100, 80, 80]);
		expect(res).toEqual([1, 1, 2, 2]);
	});

	it("returns list of ranks of 4 different numbers array", () => {
		const res = evalueRank([100, 100, 100, 70]);
		expect(res).toEqual([1, 1, 1, 2]);
	});

	it("returns list of ranks of 4 different numbers array", () => {
		const res = evalueRank([100, 100, 100, 100]);
		expect(res).toEqual([1, 1, 1, 1]);
	});

	it("returns list of ranks of 5 different numbers array", () => {
		const res = evalueRank([100, 100, 100, 100, 100]);
		expect(res).toEqual([1, 1, 1, 1, 1]);
	});

	it("returns list of ranks of 5 different numbers array", () => {
		const res = evalueRank([100, 100, 100, 100, 90]);
		expect(res).toEqual([1, 1, 1, 1, 2]);
	});

	it("returns list of ranks of 5 different numbers array", () => {
		const res = evalueRank([100, 100, 100, 90, 90]);
		expect(res).toEqual([1, 1, 1, 2, 2]);
	});

	it("returns list of ranks of 5 different numbers array", () => {
		const res = evalueRank([100, 100, 90, 90, 90]);
		expect(res).toEqual([1, 1, 2, 2, 2]);
	});

	it("returns list of ranks of 5 different numbers array", () => {
		const res = evalueRank([100, 90, 90, 90, 90]);
		expect(res).toEqual([1, 2, 2, 2, 2]);
	});

	it("returns list of ranks of 5 different numbers array", () => {
		const res = evalueRank([100, 90, 90, 90, 80]);
		expect(res).toEqual([1, 2, 2, 2, 3]);
	});

	it("returns list of ranks of 5 different numbers array", () => {
		const res = evalueRank([100, 90, 90, 80, 80]);
		expect(res).toEqual([1, 2, 2, 3, 3]);
	});

	it("returns list of ranks of 5 different numbers array", () => {
		const res = evalueRank([100, 90, 80, 80, 80]);
		expect(res).toEqual([1, 2, 3, 3, 3]);
	});

	it("returns list of ranks of 5 different numbers array", () => {
		const res = evalueRank([100, 90, 80, 80, 80]);
		expect(res).toEqual([1, 2, 3, 3, 3]);
	});

	it("returns list of ranks of 5 different numbers array", () => {
		const res = evalueRank([100, 90, 80, 80, 70]);
		expect(res).toEqual([1, 2, 3, 3, 4]);
	});

	it("returns list of ranks of 5 different numbers array", () => {
		const res = evalueRank([100, 90, 80, 70, 70]);
		expect(res).toEqual([1, 2, 3, 4, 4]);
	});

	it("returns list of ranks of 5 different numbers array", () => {
		const res = evalueRank([100, 90, 80, 70, 60]);
		expect(res).toEqual([1, 2, 3, 4, 5]);
	});
});