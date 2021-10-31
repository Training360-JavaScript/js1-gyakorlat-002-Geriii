/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/
// let numberArray = [];

function brutto (numberArray) {
	let sum = 0;
	for (let i = 0; i < numberArray.length; i++) {
		numberArray[i] *= 1.27;
        console.log(numberArray[i])
        sum += numberArray[i]
	}
	console.log(sum)
	return sum;
}
