const evalueRank = (array) => {
	let rank = [1];

	for (let i = 0; i < array.length; i++) {
		if (rank.length == array.length) {
			break;
		}

		if (array[i] != array[i + 1]) {
			rank.push(rank[i] + 1);
		}
		else {
			rank.push(rank[i]);
		}
	}

	return rank;
}

module.exports = { evalueRank };