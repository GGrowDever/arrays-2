function verificaNumero(vetor, numero) {
	return vetor.includes(numero);
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let numero = 5;

document.write(verificaNumero(vetor, numero));
