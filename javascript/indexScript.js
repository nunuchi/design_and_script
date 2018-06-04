var imgArray = ["https://mfiles.alphacoders.com/431/431389.jpg", "https://i.neoseeker.com/ca/xenoblade-chronicles-2_conceptart_pCRyA.jpg", "https://vignette.wikia.nocookie.net/finalfantasy/images/8/83/Besaid_Village_%28artwork%29.jpg/revision/latest?cb=20061214152438", "https://newchallengergamingofficial.files.wordpress.com/2016/12/somobile2.jpg?w=672&h=350&crop=1", "https://wallpaper.wiki/wp-content/uploads/2017/05/wallpaper.wiki-Free-HD-Animal-Crossing-Pictures-Download-PIC-WPE0012446-758x426.png", "https://vignette.wikia.nocookie.net/chrono/images/a/aa/Chrono_Cross_ocean-art.jpg/revision/latest?cb=20091217203009", "http://www.kinyu-z.net/data/wallpapers/81/984578.jpg"];
var linkArray = ["imageplay.html","google.com","google.com","google.com","google.com","google.com"];
var menuItems;
var imageSlideItem;
var imagePlay;
var audio = new Audio('se/little_robot_sound_factory_multimedia_Click_Electronic_14.mp3');


window.onload = function() {
	var isChrome = !!window.chrome && !!window.chrome.webstore;
	if(isChrome) {alert("Alert to allow for autoplay of music and sound effects if using google chrome.");}
	init();
}


function init() {
	menuItems = document.getElementsByClassName('menuBox');
	imageSlideItem = document.getElementById('imageSlideItem');
	imageSlideItem.style.backgroundImage = "url('"+imgArray[0]+"')";
	imagePlay = document.getElementById('menuItem1');

	for(var i = 0; i < menuItems.length; i++) {
		var location = i; console.log(location);
		menuItems[i].addEventListener('mouseover', (function(i) {
			return function() {
				imageSlideItem.style.backgroundImage = "url('"+imgArray[i]+"')";
				audio.play();
			};
		}(i)));

		menuItems[i].addEventListener('click', (function(i) {
			return function() {
				window.location = linkArray[i];
			};
		}(i)));
	}//for(var i = 0; i < menuItems.length; i++) {

	$( "#menuItem1" ).click(function() {
  		$( ".target" ).change();
	});
}//initialize on page load