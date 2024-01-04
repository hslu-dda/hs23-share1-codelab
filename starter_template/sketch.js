let data;

function setup() {
  createCanvas(400, 400);
  background(220);

  d3.json('https://api.vam.ac.uk/v2/objects/search?q="luzern"').then(json => {
    data = json;
    console.log("Objects that have the word 'Luzern' somewhere in the record:", data)
  })

}

function draw() {
}
