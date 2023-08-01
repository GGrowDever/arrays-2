let inicializador = 1;
let numerosPerfeitos = [];

while (numerosPerfeitos.length < 4) {
	let soma = 0;

	for (let i = 1; i < inicializador; i++) {
		if (inicializador % i === 0) {
			soma += i;
		}
	}

	if (soma === inicializador) {
		numerosPerfeitos.push(inicializador);
	}

	inicializador++;
}
document.write(numerosPerfeitos);
