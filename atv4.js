function uniaoVetores(vetorA, vetorB) {
	let vetorC = [];
	for (let i = 0; i < vetorA.length; i++) {
		vetorC.push(vetorA[i]);
	}
	for (let i = 0; i < vetorB.length; i++) {
		if (vetorC.indexOf(vetorB[i]) === -1) {
			vetorC.push(vetorB[i]);
		}
	}
	return vetorC;
}

let vetorA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let vetorB = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let vetorC = uniaoVetores(vetorA, vetorB);

document.write(vetorC);