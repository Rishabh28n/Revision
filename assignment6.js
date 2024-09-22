
 const add=(num1, num2) => num1 + num2;
 const subtract=(num1, num2) => num1-num2;
 const multiply=(num1, num2) => num1 * num2;
 const divide=(num1,num2)=> {
    if(num2==0)
        return "Division is not possible";
    
    return num1/num2;
 }
function getInput() {
    const num1 = parseFloat(prompt("Enter the first number: "));
    const num2 = parseFloat(prompt("Enter the second number: "));
    return [num1, num2];
}

function arithmeticOperations() {
    const operation = prompt("Select operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide");

    if (["1", "2", "3", "4"].includes(operation)) {
        const [num1, num2] = getInput();

        switch (operation) {
            case "1":
                alert(`${num1} + ${num2} = ${add(num1, num2)}`);
                break;
            case "2":
                alert(`${num1} - ${num2} = ${subtract(num1, num2)}`);
                break;
            case "3":
                alert(`${num1} * ${num2} = ${multiply(num1, num2)}`);
                break;
            case "4":
                alert(`${num1} / ${num2} = ${divide(num1, num2)}`);
                break;
            default:
                alert("Invalid input.");
        }
    } else {
        alert("Invalid input. Please enter a valid option.");
    }
}

// Run the arithmetic operations
arithmeticOperations();
