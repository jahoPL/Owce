randomSheeps.sort((a,b) => 
parseInt(a.maxSpeed) < parseInt(b.maxSpeed) ? -1 : 1 );


function toHTML( owca ){
	return `
	  <tr>
			<td>${owca.name}</td>
			<td>white</td>
			<td>0</td>
			<td>false</td>
			<td>true</td>
			<td>0 Km/h</td>
			<td>5</td>
	  </tr>
 `;
 }

const tabelaOwiec = document.querySelector("#owce");
wyswietlaczOwiec(tabelaOwiec);

