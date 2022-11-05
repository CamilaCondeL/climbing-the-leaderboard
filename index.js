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

climbingLeaderBoard = (ranked, player) => {
	const results = [];
	let playerIndex = 0;
	let position = 0;

	for (let i = 0; i < player.length; i++) {
		for (let j = ranked.length - 1; j >= 0; j--) {

			if ((player[i] > ranked[j]) && j == 0) {
				if (playerIndex > 0) {
					ranked.splice(playerIndex, 1);
				}

				ranked.splice(j, 0, player[i]);
				playerIndex = j;
				const newArr = evalueRank(ranked);
				results.push(newArr[playerIndex]);
				break;
			}

			if (player[i] < ranked[j]) {
				if (playerIndex > 0) {
					ranked.splice(playerIndex, 1);
					console.log("ranked array after deleting previous player value " + ranked);
				}

				ranked.splice(j + 1, 0, player[i]);
				playerIndex = j + 1;
				const newArr = evalueRank(ranked);
				results.push(newArr[playerIndex]);
				break;
			}
		}

	}

	return results;
}

module.exports = { evalueRank, climbingLeaderBoard };