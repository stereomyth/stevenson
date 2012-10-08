/* Author:

*/
$(function () {
	
	var colours = new Array("76d292","76acd2","d2aa76");
	var rand = Math.floor(Math.random()*3);
	var colour = '#'+colours[rand]

	console.debug("numebr is: " + rand + " colour is: " + colour);

	$('html').css('background', colour);


});