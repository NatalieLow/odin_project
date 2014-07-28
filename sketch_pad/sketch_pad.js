$(document).ready(function() { 
	square_grid();
});


function square_grid(num){
	if(typeof(num)==='undefined') num = 16;
	var myNode = document.getElementById("grid_container");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	};

	var append_to = document.getElementById("grid_container");
	var col_dim = Math.floor(960/num - 2) + "px";
	for(var i = 0; i < num; i++){
		var row = document.createElement("div");
		row.className = "row";
		for(var j = 0; j < num; j++ ){
			var column = document.createElement("div")
			column.className = "column";
			row.appendChild(column);

		};
		append_to.appendChild(row);
	};
	$(".column").css({
		width: col_dim,
		height: col_dim 
	}).mouseover(function() {
		$(this).addClass('sketch');
		$(".sketch").css("background-color","#0f0");
	});	
};

function askGridNum(){
	var userChoice = prompt("How many columns/rows would you like the square grid to contain?");

	while(userChoice > 500){
		userChoice = prompt("Please select a number less than 65.");

	};

	return userChoice;
};

function resetGrid(){
	$(".sketch").removeClass('sketch');
	$(".column").css("background-color","#aaa")
	square_grid(askGridNum());
};

