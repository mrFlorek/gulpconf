$(function(){
  function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);


      for (var i = 0; i < response.person.length; i++) {
        var body = document.createElement("ul");
        body.innerHTML = "osoba nr. "+ (i+1);
        body.innerHTML += "<li>"+ response.person[i].name +"</li>";
        body.innerHTML += "<li>"+ response.person[i].age +"</li>";
        document.body.appendChild(body);
      }


    }
  };
  xhttp.open("GET", "text.json", true);
  xhttp.send();
}
loadDoc();
});
