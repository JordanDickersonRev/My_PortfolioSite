export const project3 = {
    name : `Calculator`,
    snippet: `Although this is a basic calculator, I decided to
        add it to my portfolio because it took longer than expected. This 
        project does not include any calculations outside of...`,
    summary : `Although this is a basic calculator, I decided to
        add it to my portfolio because it took longer than expected. This 
        project does not include any calculations outside of multiplication,
        divison, addition and subtraction. Make sure you read each section
        to understand why I'm proud of this project.`,
    process : [`This calculator was made using react. I created the buttons
        using an object constructor. The constructor takes in four parameters
        and each parameter is an element of a button. Every time I create
        an instance of the object constructor a row is created. For example,
        to display the first row, I first have to create a row1 variable with
        syntax like this, const row1 = new (Constructor Name)('1', '2', '3', '4').
        The constructor takes the parameters and does this to each of them,
        this.button(1,2,3 or 4) = <button onClick={() => calculate(parameter)}>{parameter}
        </button>;. This syntax creates a button for that parameter and also gives
        it an onClick attribute/prop so whenever a client clicks on the button
        the calculate function is called. To display each button in react I then
        had to do this syntax inside the App-Buttons div, {row1.button1}
        {row1.button2}{row1.button3}{row1.button4}{row2.button1}.... etc. The
        calculate function takes in the element of the button tag which is always
        going to be some kind of string for this project. The first thing that
        happens in the function is the parameter gets pushed inside a calculator
        array and that array gets printed to the calculator using the document
        .getElementId method. Everytime a client clicks on a button the element
        of it is displayed onto the calculator. Now for the fun part, if the client
        clicks on an element that reads "=" then everything previously displayed
        in the calculator will be gone and the answer of the calculation will be
        shown. How does this work? There is an if statement inside of the calculate
        function that first calls the pemdas function and returns the order of
        how the elements should be calculated. After that, the sumOf function takes
        the value returned from the pemdas function and calculates the clients
        answer. If the clients answer does not equal a number then error will
        print in the calculator, I did this using a ternary operator. The calculator
        array is then reset to empty and the clients total is the first value that
        gets pushed inside of the calculator array. This allows the client to use 
        their original total for another calculation. The client can also choose not
        to use their original total by clicking on the AC button to clear the
        calculator completely. Read the difficulties section to learn how the pemdas
        and sumOf functions were created.`],
    difficulties : ``,
    future : ``,
    video : ``,
    code : ``
};