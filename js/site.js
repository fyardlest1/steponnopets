// step 1: receiving and responding to the user's string
function getValue() {
	let userInput = document.getElementById('message').value;

	if (userInput.length < 2) {
		Swal.fire({
			icon: 'error',
			backdrop: false,
			title: 'Step-On-No-Pets',
			text: 'Please, enter at least 2 characters.',
		})
	} else {
		let isPalindrome = checkForPalindrome(userInput);
		let userMessageReversed = reverseString(userInput);

		// creating an object that handles everything
		let results = {
			input: userInput,
			reversed: userMessageReversed,
			isPalindrome: isPalindrome
		}

		// finally displaying the results on the screen
		displayResults(results)
	}
}

// step 2: the function that will reverse our string.
function reverseString(inputString) {
	// You can treat a string just like an array
	let result = '';

	// decrementing for loop
	for (let index = inputString.length - 1; index >= 0; index--) {
		result += inputString[index];
	}

	// return the string
	return result;
}

// step 3: determining whether a string is a palindrome
function checkForPalindrome(input) {
	// take the user input and reverse it
	let lowerCaseInput = input.toLowerCase()
	lowerCaseInput = lowerCaseInput.replace(/[^a-z0-9]/gi, '')

	let reversed = reverseString(lowerCaseInput);

	// see if the reversed string is the same as the user input
	let isPalindrome = reversed == lowerCaseInput

	// return a value indicating whether it is or not a palindrome
	return isPalindrome;
}

// step 4: displaying a message to the user to show 
// whether their string is a palindrome or not
function displayResults(results) {
	// get a copy of the template
	let template

	if (results.isPalindrome) {
		// - if it is a palindrome, select the success template
		template = document.getElementById('success-template')
	} else {
		// - if it is NOT, select the danger template
		template = document.getElementById('danger-template')
	}

	// get a new copy of the template's contents
	let templateCopy = template.content.cloneNode(true)

	// put the original message in the <p class="input-message"> element
	templateCopy.querySelector(
		'.input-message'
	).textContent = `You entered: ${results.input}`

	// put the original message in the <p class="reversed-message"> element
	templateCopy.querySelector('.reversed-message').textContent = 
	`Your message reversed is: ${results.reversed}`;

	// add our copy of the template tag to the div id "results"
	document.getElementById('results').prepend(templateCopy);
}



// BONUS 1:
// determining whether a string is a palindrome using array notation
// function checkForPalindromeB(userInput) {
// 	// turn the string into an array
// 	// split a string into multiple sub-strings and return them in the form of an array
// 	let characters = userInput.split('')
// 	let arrayRuselt = []

// 	// using a decrementing for loop
// 	for (let index = userInput.length - 1; index >= 0; index--) {
// 		let letter = characters[index]
// 		arrayRuselt.push(letter)
// 	}

// 	// turn the new array back into a string
// 	let newArray = arrayRuselt.join('')

// 	// palindrome or not
// 	if (newArray.toLowerCase() == userInput.toLowerCase()) {
// 		return newArray.toLowerCase()
// 	} else {
// 		return false
// 	}
// }

// BONUS 2:
// determining whether a string is a palindrome using string only
// function checkForPalindromeC(userInput) {
// 	let stringResult = ''
// 	// using a decrementing for loop
// 	for (let index = userInput.length - 1; index >= 0; index--) {
// 		stringResult += userInput[index]
// 	}

// 	if (userInput.toLowerCase() == stringResult.toLowerCase()) {
// 		return stringResult.toLowerCase()
// 	}
// }

// BONUS 3:
// check if the words can be compared to itself using reverse() array method
// function checkForPalindromeD(userInput) {
// 	let resultStr = Array.from(userInput.toLowerCase())
// 	resultStr = resultStr.reverse().join('')

// 	if (resultStr == userInput.toLowerCase()) {
// 		return resultStr
// 	}
// }


// FIRST ATTEMPT -> FIRST SOLUTION
// step 1: receiving and responding to the user's string
// function getValues() {
// 	let userInput = document.getElementById('message').value.trim().split(' ').join('');
// 	// replaces all special characters with '' (empty string) using the replace() method
// 	userInput = userInput.replace(/[^a-zA-Z0-9 ]/g, '');

// 	if (userInput) {
// 		let palindrome = checkForPalindrome(userInput);
// 		displayResults(palindrome);
// 	} else if (userInput.length < 2) {
// 		let alert = document.getElementById('alert')
// 		alert.classList.add('invisible');

// 		Swal.fire({
// 			icon: 'error',
// 			backdrop: false,
// 			title: 'Step-On-No-Pets',
// 			text: 'Please, enter at least 2 characters',
// 		})
// 	}
// }

// // step 2: determining whether a string is a palindrome
// function checkForPalindrome(userInput) {
// 	let stringResult = ''
// 	// using a decrementing for loop
// 	for (let index = userInput.length - 1; index >= 0; index--) {
// 		stringResult += userInput[index]
// 	}

// 	if (userInput.toLowerCase() == stringResult.toLowerCase()) {
// 		return stringResult.toLocaleLowerCase()
// 	}
// }

// // step 3: displaying a message to the user to show 
// // whether their string is a palindrome or not
// function displayResults(palindrome) {
// 	let alert = document.getElementById('alert');
	
// 	// put the HTML into the page
// 	if (palindrome) {
// 		document.getElementById('heading').innerHTML =
// 		'Well done! You entered a Palindrome!';
		
// 		document.getElementById(
// 			'result'
// 			).innerHTML = `Your phrase reversed message is: ${palindrome}`;
			
// 			alert.classList.replace('alert-danger', 'alert-success');
// 		} else {
// 			document.getElementById('heading').innerHTML =
// 				'Sorry My Friend!'
// 			document.getElementById('result').innerHTML = 'Your reversed message is not a palindrome';
// 			alert.classList.replace('alert-success', 'alert-danger');
// 		}
		
// 	alert.classList.remove('invisible');
// }