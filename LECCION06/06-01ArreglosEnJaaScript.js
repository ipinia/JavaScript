const autos = ['BMW','Volvo','Seat','Vocho',];
console.log(autos);

for (i = 0; i < autos.length; i++){
  console.log(i +': '+ autos[i]);
}

console.log(Array.isArray(autos));
console.log( autos instanceof Array);