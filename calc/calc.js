let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clearBtn'),    
    result = document.getElementById('result'),
    howItWorksBtn = document.getElementById('howItWorksID'),
    display = document.getElementById('output'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '',
    operationList = document.getElementById('operationList'),
    showedList = false,
    showOperations = document.getElementById('showOperations');
    showedDivList = false;

// Adding Listeners
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function(e) {
        numberPress(e.target.value);
    });
}

for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e){        
        operation(e.target.value);
    });
}

for (let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function(e){        
      clearFunc(e.srcElement.id)
    });
}
decimalBtn.addEventListener('click', decimal);
howItWorksBtn.addEventListener('click', howItWorks);

// Rebound functions
function numberPress(number) {
    if(MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        }   
    }
}

function operation(op) {
    let localOperationMemory = display.value;
    
    if(MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if(MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -=  parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *=  parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /=  parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    }
}

function decimal() {
    let localDecimalMemory = display.value;
    if(MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if(localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }        
    }
    display.value = localDecimalMemory;
}

function clearFunc(id) {
    if(id === 'ce') {
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'c') {
        display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    }
}

function howItWorks() {
    if(!showedDivList) {
        showOperations.style.display = "block";
        showedDivList = true;
    } else {
        showOperations.style.display = "none";
        showedDivList = false;
    }
    if(showedList !== true) { 
        for (let i = 0; i < operations.length; i++) {
            let newLi = document.createElement('li');
            let operationText = operations[i].alt;
            newLi.innerText = operationText;
            operationList.appendChild(newLi);
        }
        showedList = true;
    }     
}
