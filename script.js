function calculate(operator) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultSpan = document.getElementById('resultValue');

    // Verification check ki values enter hui hain ya nahi
    if (isNaN(num1) || isNaN(num2)) {
        resultSpan.innerText = "Please enter both values!";
        resultSpan.style.color = "red";
        return;
    }

    let result = 0;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            resultSpan.innerText = "Cannot divide by 0!";
            resultSpan.style.color = "red";
            return;
        }
        result = num1 / num2;
    }

    resultSpan.innerText = result;
    resultSpan.style.color = "#00796b";
}

function clearAll() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultValue').innerText = '0';
    document.getElementById('resultValue').style.color = '#00796b';
}