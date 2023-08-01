let nomes = [];
for (let i = 0; i < 5; i++) {
	let nome = prompt('Digite um nome: ');
	nomes.push(nome);
}

document.write('<br>' + 'Lista de nomes:' + '<br>');
for (let nome of nomes) {
	document.write(nome + ',');
}

document.write('<br>' + 'Nomes da ordem inversa: ' + '<br>');
document.write(nomes.reverse());
