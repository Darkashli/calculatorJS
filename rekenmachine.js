var Calculator = {};
// 6, 2, 10, 2, 2
var numbers = [];
// "*", "+", "/", "*"
var operators = [];

var DisplaySom = "";
var inputNumber = "";


console.log("numbers: " + numbers);
console.log("operators: " + operators);

Calculator.clear = function() {
	numbers = [];
	operators = [];
	DisplaySom = "";
	inputNumber = "";
	var som = document.getElementById('som');
	var answer = document.getElementById('answer');
	som.value = DisplaySom;
	answer.value = DisplaySom;
}


Calculator.add = function(input) {
	// Get Display Som! stopen we in de variable som.
	var som = document.getElementById('som');
	// Dan plakken we de input (1,2,3,4,5,6,7,8,9 of 0) in de variable DisplaySom.
	DisplaySom += input;
	inputNumber += input;
	// Vervolgens laten we dit ook stap voor stap zien op het scherm in som display.
	som.value = DisplaySom;
	console.log("numbers: " + numbers);
	console.log("operators: " + operators);
}

Calculator.operator = function(operator) {
	// Get Display Som! stopen we in de variable som.
	var som = document.getElementById('som');
	// Dan plakken we de operator (*, /, + of -) in de variable DisplaySom.
	DisplaySom += operator;
	// Vervolgens laten we dit ook stap voor stap zien op het scherm in som display.
	som.value = DisplaySom;

	// voegt het nummer dat gemaakt is in de array van de nummers!
	numbers.push(inputNumber);
	// inputNumber moet leeg gemaakt worden voor nieuw input van nummer.
	inputNumber = "";


	// voegt de operator in de array van de operators! zodat berekend kan worden! :P
	operators.push(operator);
	console.log("numbers: " + numbers);
	console.log("operators: " + operators);

}

Calculator.calculate = function(){
	// voegt het nummer dat gemaakt is in de array van de nummers!
	numbers.push(inputNumber);
	// inputNumber moet leeg gemaakt worden voor nieuw input van nummer.
	inputNumber = "";
	console.log("numbers: " + numbers);
	console.log("operators: " + operators);

	// hier onder wordt de berekening gemaakt!
	while ((operators.includes("*") || operators.includes("/"))) {
		var keer = operators.indexOf("*");
		var delen = operators.indexOf("/");
		

		var position = -1;

		if (((keer < delen) && keer > -1) || (keer >=0 && delen == -1)) {
			position = keer;
		} else {
			if (delen > -1) {
			position = delen;
			}
		}

		if(operators[position] == "*") {
			numbers[position] = Number(numbers[position]) * Number(numbers[position + 1]);
			
		} else {
			numbers[position] = Number(numbers[position]) / Number(numbers[position + 1]);
		}
		operators.splice(position, 1);
		numbers.splice(position + 1, 1);
		
	}

	while ((operators.includes("+") || operators.includes("-"))) {
		var plus = operators.indexOf("+");
		var min = operators.indexOf("-");
		

		var position = -1;

		if (((plus < min) && plus > -1) || (plus >=0 && min == -1)) {
			position = plus;
		} else {
			if (min > -1) {
			position = min;
			}
		}

		if(operators[position] == "+") {
			numbers[position] = Number(numbers[position]) + Number(numbers[position + 1]);
			
		} else {
			numbers[position] = Number(numbers[position]) - Number(numbers[position + 1]);
			
		}
		operators.splice(position, 1);
		numbers.splice(position + 1, 1);
		
		}

		Calculator.display();
}



Calculator.display = function(){
	var anwser = document.getElementById('anwser');

	anwser.value = numbers[0];
}


