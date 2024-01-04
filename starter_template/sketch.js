let data;
let cnv;

function setup() {
  cnv = createCanvas(400, 400);
  background(220);

  d3.json('https://api.vam.ac.uk/v2/objects/search?q="luzern"').then(json => {
    data = json;
    console.log("Objects that have the word 'Luzern' somewhere in the record:", data)
  })

}

function draw() {
}

// Funktion um JPGs zu exportieren
function keyPressed() {
	if (key == 's') {

		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		var hh = String(today.getHours())
		var min = String(today.getMinutes())
		var sec = String(today.getSeconds())

		today = mm + '/' + dd + '/' + yyyy;
		let filename = yyyy + '-' + mm + '-' + dd + '-' + hh + '-' + min + '-' + sec;

		console.log(key)
		saveCanvas(cnv, filename, 'jpg');
	}
}
