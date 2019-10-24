function toHTML(owca) {
	return `
	  <tr>
			<td>${owca.name}</td>
			<td>${owca.colors}</td>
			<td>${owca.age}</td>
			<td>${owca.canSweam}</td>
			<td>${owca.isHappy}</td>
			<td>${owca.maxSpeed}</td>
			<td>${owca.numberOfLegs}</td>
	  </tr>
 	`;
}

const tabela = document.querySelector("#owce");
const imię = document.querySelector("#sheep-name");
const szczęście = document.querySelector("#sheep-happy")
const pływalność = document.querySelector("#sheep-sweam")
const nogi = document.querySelector("#number-of-legs");
function check( owca ){
	const wpisaneImię = imię.value.trim()
	const wpisaneNogi = nogi.value.trim()
	const wpisaneSzczęście = szczęście.checked
	const wpisanaPływalność = pływalność.checked
	if(wpisaneSzczęście && !(owca.isHappy))	return false;
	if(wpisanaPływalność && !(owca.canSweam)) return false;
	if(wpisaneImię && !owca.name.startsWith( wpisaneImię )) return false;
	if(wpisaneNogi && !owca.numberOfLegs == wpisaneNogi) return false;
	return owca.numberOfLegs( wpisaneNogi );
}

function refresh(){
	const przefiltrowane_owce = randomSheeps.filter( check );
	const html_owce = przefiltrowane_owce.map(toHTML);
	tabela.innerHTML = html_owce.join("");
}

refresh();


const szukaj = document.querySelector("#szukaj");
szukaj.addEventListener("click", refresh);