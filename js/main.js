/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/
const generateList = function (listItems) {
	let markup = `<ul>`;
	for (const i of listItems) {
	  markup += `<li>${i}</li>`;
	}
	
	return markup += `</ul>`;
}