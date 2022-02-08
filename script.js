// Mad Lib with JavaScript by Yerosen

// Event Listner
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

// Event Function
function buildMadLib() {
  // Input
  let schoolSubject = document.getElementById("subject").value;
  let favouriteColor = document.getElementById("color").value;
  let noun = document.getElementById("noun").value;
  let name = document.getElementById("name").value;
  let adjective= document.getElementById("adjective").value;
  let places = document.getElementById("places").value;
  let color = document.getElementById("color").value;
  let furniture = document.getElementById("furniture").value;
  let verb = document.getElementById("verb").value;
  let person = document.getElementById("person").value;


  // Process
  let result = 'In ' + schoolSubject + ' class, our teacher was wearing a ' + color + ' ' + noun + '. Mrs.' + name + ' is my favourite teacher because she is ' + adjective + '. Her classroom has posters with pictures of ' + places + ' , a world map, and a ' + favouriteColor + ' ' + furniture + '. She ' + verb + ' had to make sure each ' + person + ' understands.';
  // Output
  document.getElementById("result").innerHTML = result;
}