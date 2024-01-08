let women_data;
let men_data;

let woman_depicted = "https://api.vam.ac.uk/v2/objects/search?id_depicts=AAT25943";
let men_depicted = "https://api.vam.ac.uk/v2/objects/search?id_depicts=AAT25928"

let m_count;
let w_count;

let m_size;
let w_size;

let cnv;

function setup() {
  cnv = createCanvas(800, 800);
  background(220);

  // 9324 is count of the most depicted concept (flowers)
  const scale = d3.scaleSqrt().domain([0, 9324]).range([0, width/2]);

  d3.json(woman_depicted).then(response => {
    women_data = response;
    console.log("Woman", women_data)

    w_count = women_data['info']['record_count'];
    // 9324 is count of the most depicted concept (flowers)
    w_size = scale(w_count)
  })

  d3.json(men_depicted).then(response => {
    men_data = response;
    console.log("Men", men_data)

    m_count = men_data['info']['record_count'];
    // 9324 is count of the most depicted concept (flowers)
    m_size = scale(m_count)
  })

  textAlign(CENTER);
  noStroke()
  redraw();

}

function draw() {
  // woman
  circle(width/4, height/2, w_size)
  text(w_count + " woman depicted", width/4, height/2)
  // men
  circle((width/4)*3, height/2, m_size)
  text(m_count + " men depicted", (width/4)*3, height/2)
  // let m_size = map(m_count)
  // console.log("Men 2", men_data)
}


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
