function addToExpression(value) {
    document.getElementById('expression').value += value;
  }

  function clearInput() {
    document.getElementById('expression').value = '';
  }

  function calculate() {
    let expression = document.getElementById('expression').value;
    try {
      let result = eval(expression);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error('Invalid expression');
      }
      document.getElementById('expression').value = result;
    } catch (error) {
      alert(error.message);
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.key.match(/[0-9]/)) {
      document.getElementById('expression').value += event.key;
    } else if (event.key === 'Enter') {
      calculate();
    } else if (!['+', '-', '*', '/', '%', 'Backspace'].includes(event.key)) {
      alert('Only numbers and mathematical operators are allowed.');
    }
  });