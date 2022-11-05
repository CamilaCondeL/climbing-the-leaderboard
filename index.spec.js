const { evalueRank, climbingLeaderBoard } = require('./index');

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


describe('tests the rank array', () => {

	// it("returns list of different ranks", () => {
	// 	const res = climbingLeaderBoard([100, 90, 80, 70], [5, 60, 85, 120]);
	// 	expect(res).toEqual([5, 5, 3, 1]);
	// })

	// it("returns list of 2 equal ranks", () => {
	// 	const res = climbingLeaderBoard([100, 80, 80, 70], [5, 60, 85, 120]);
	// 	expect(res).toEqual([4, 4, 2, 1]);
	// })

	// it("returns list of 3 ranks", () => {
	// 	const res = climbingLeaderBoard([100, 80, 80, 80], [5, 60, 80, 120]);
	// 	expect(res).toEqual([3, 3, 2, 1]);
	// })


	it("returns list of 3 ranks", () => {
		const res = climbingLeaderBoard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]);
		expect(res).toEqual([6, 5, 4, 2, 1]);
	})
});