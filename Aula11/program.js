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
    }
}
// mostrando a matriz em formato de tabela 
console.table(matriz);