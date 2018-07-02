var div = document.getElementsByClassName("color")[0]
div.style.backgroundColor = "blue";

// var divELement = document.createElement("div");
// divELement.id = "Div2";

// document.body.appendChild(divELement);

var myH1 = document.createElement("h1");
myH1.innerText = "Heading One, using textContent property.";

document.getElementById("div2").appendChild(myH1);

var newH1 = document.createElement("h1");
var textNode = document.createTextNode(" I am a text node!");

newH1.appendChild(textNode);
document.getElementById("div3").appendChild(newH1);


// var newImg = document.createElement("img");
// newImg.src = "http://dogoftheday.com/archive/2009/December/22b.jpg";

// newImg.alt = "pomeranian chihuahua mix";
// document.body.appendChild(newImg);

// var btn = document.createElement("button"); 
// var t = document.createTextNode("submit");
// btn.appendChild(t);
// document.body.appendChild(btn); 

function changeImage() {
	var newImg = document.getElementById("newImg");

	newImg.src = "http://1.bp.blogspot.com/-WjZKJctHq08/TbNtnyQ8NSI/AAAAAAAAA_8/yfHKdgCQT24/s1600/IMG_4356.JPG"
	newImg.alt = "smiling pomchi mix"
}

