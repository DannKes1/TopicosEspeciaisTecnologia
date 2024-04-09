document.writeln('123 testando');

var carros = new Array();
carros[0] = 'volvo';
carros[1] = 'bmw';
document.writeln(carros.length);
document.writeln(carros[1]);
var idade = 20;
var pais = "Brasil";
document.writeln(idade);
document.writeln(pais);

for(let i = 0; i <= 20; i++){
if (i % 2 == 0){
    //document.writeln(i);
    document.writeln(i + "é par!");
} else{
    document.writeln(i + "impar")
}
}