document.addEventListener('DOMContentLoaded', function () {
    const Input = document.getElementById("input");
    const AC = document.getElementById("ACButton");
    const Equal = document.getElementById("ButtonEQ");
    
    // Getting Numerical and Operation Buttons
    const NumButtons = document.querySelectorAll('.buttons');
    const OpButtons = document.querySelectorAll('.Operation');

    let expression = "";

    // Handle clear (AC) button
    AC.addEventListener('click', () => {
        expression = "";
        Input.value = "0";
    });

    // Handle number buttons
    NumButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const num = e.target.innerHTML;
            expression += num;
            Input.value = expression;
        });
    });

    // Handle operation buttons
    OpButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const operation = e.target.innerHTML;
            expression += ` ${operation} `;
            Input.value = expression;
        });
    });

    // Handle equal button
    Equal.addEventListener('click', () => {
        try {
            expression = eval(expression.replace(/x/g, '*').replace(/÷/g, '/')); 
            Input.value = expression;
        } catch (error) {
            Input.value = "Error";
        }
    });
});
