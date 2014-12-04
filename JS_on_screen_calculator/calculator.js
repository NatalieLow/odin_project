$(document).ready(function() {
	numDivs();
	operatorDivs();
	calculate();

});

function numDivs(){
	var doc_body = document.body
	num = 9;
	for( var i = 0; i < 4; i++){
		var row = document.createElement("div");
		row.className = "row"
		if(i < 3){
			for(var j = 0; j < 3; j++){
			var cell = document.createElement("div");
			cell.className = "cell";
			var num_p_elmt = document.createElement("p");
			var num_to_append = document.createTextNode(num);
			num_p_elmt.appendChild(num_to_append);
			cell.appendChild(num_p_elmt);
			row.appendChild(cell);
			num--;

			}
		} else {
			var zero_cell = document.createElement("div");
			zero_cell.className = "cell";
			zero_cell.id = "zero_cell";
			var num_p_elmt = document.createElement("p");
			var num_to_append = document.createTextNode(num);
			num_p_elmt.appendChild(num_to_append);
			zero_cell.appendChild(num_p_elmt);
			doc_body.appendChild(zero_cell);
			row.appendChild(zero_cell);
		}
		doc_body.appendChild(row)
	}
};

function operatorDivs(){
	var doc_body = document.body;
	var operators = ['/', '*', '-', '+', '=', 'c'];
	var k = 0;
	for( var i = 0; i < 2; i++){
		var row = document.createElement("div");
		row.className = "row"
		for(var j = 0; j < 3; j++){
			var cell = document.createElement("div");
			cell.className = "cell";
			var operator_p_elmt = document.createElement("p");
			var operator_to_append = document.createTextNode(operators[k]);
			operator_p_elmt.appendChild(operator_to_append);
			cell.appendChild(operator_p_elmt);
			row.appendChild(cell);
			k++;
			}
			doc_body.appendChild(row);
		}
}

function calculate(){
	var operators = ['/', '*', '-', '+', '=', 'c'];
	var operator_funtions = [divide, multiply, subtract, add];
	var nums_clicked = [];
	var operators_clicked = [];
	var result = [];
	var cell_elements = document.getElementsByClassName("cell");
	console.log(cell_elements);
	var n = cell_elements.length;
	
	var makeHandler = function(num){
		return function() {
			p_text = cell_elements[num].getElementsByTagName('p')[0].innerHTML
			if(parseInt(p_text) || parseInt(p_text) === 0){
				nums_clicked.push(p_text);
				console.log(nums_clicked.join(""));
			}
			else {
				index = operators.indexOf(p_text)
				if(index < 4){
					if (result[0]){
						r1 = result[0];
						r2 = parseInt(nums_clicked.join(""));
						new_result = operators_clicked[0](r1,r2);
						result[0] = new_result;	
						console.log(new_result);	
					} else {
						result.push(parseInt(nums_clicked.join("")));
					}
				operators_clicked[0] = operator_funtions[index];
				nums_clicked = [];
				} else {
					if (index === 4){
						new_result = operators_clicked[0](result[0],parseInt(nums_clicked.join("")));
						console.log(new_result)
					}
					else {
						console.log(0)
					}
					result = [];
					nums_clicked = [];
					operators_clicked = [];	
				}
				
			}
		}
	}
	for (var i = 0; i < n; i++){
		cell_elements[i].onclick = makeHandler(i);	
	}	
}

var add = function(n1, n2){
    return n1 + n2;
}

var multiply = function(n1, n2){
    return n1 * n2;
}

var divide = function(n1, n2){
    return n1 / n2;
}

var subtract = function(n1, n2){
    return n1 - n2;
}








