const matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let table = document.getElementById("myTable");

// for que percorre a linha
for (let i = 0; i < matriz.length; i++) {
    let row = table.insertRow(i);
    // for que percorre a coluna 
    for (let j = 0; j < matriz[i].length; j++) {
        let cell = row.insertCell(j);
        cell.innerHTML = matriz[i][j];
        // se o valor for 10, mostra um aviso
        if (matriz[i][j] === 10) {
            alert('Valor 10 encontrado!');
        }
    }
}
// mostrando a matriz em formato de tabela 
console.table(matriz);


// exemplo operador &&
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] > 5 && matriz[i][j] < 15) {
            console.log('Valor encontrado entre 5 e 15: ' + matriz[i][j]);
        }
    }
}

// exemplo operador OR ||
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === 5 || matriz[i][j] === 15) {
            console.log('Valor encontrado igual a 5 ou 15: ' + matriz[i][j]);
        }
    }
}

// Exemplo operador NOT
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (!(matriz[i][j] === 10)) {
            console.log('Valor encontrado que não é igual a 10: ' + matriz[i][j]);
        }
    }
}


// exemplo operador menor que
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] < 5) {
            console.log('Valor encontrado menor que 5: ' + matriz[i][j]);
        }
    }
}

// exemplo operador maior ou igual
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] >= 15) {
            console.log('Valor encontrado maior ou igual a 15: ' + matriz[i][j]);
        }
    }
}

// exemplo operador diferente
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] != 10) {
            console.log('Valor encontrado diferente de 10: ' + matriz[i][j]);
        }
    }
}
