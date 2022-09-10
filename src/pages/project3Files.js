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
    difficulties : `To be honest, I underestimated this project. I didn't think about
        please excuse my dear aunt sally when I started this. I thought creating a calculator
        would be as easy as adding variables together in a line of code. The hardest part
        about this project was creating an algorithm for multiple functions. The pemdas
        function starts with two empty arrays, one array for multiplication and divison,
        and another array for addition and substraction. There is also a for of loop that
        loops through every index in the calculator array. The goal of this loop is to make 
        sure multiplication and division are calculated first. Inside the for of loop, I 
        created two variables that act as counters. I also created an if statement. The if
        statement sees if the current index being looped through has a multiplication or 
        division sign. The else if checks for addition or subtraction signs. The start 
        variable and the end variable are important because they tell javascript how many
        indexes should be taken from the calculator array. For example, if I have a calculator 
        array that has [3,4,1,x,4,+,5,4,3], the loop would first multiply 341 x 4 because of the if
        statement. The loop would then take that multiplied answer and push it to the addition
        and subtraction array with "+" and "543". The pemdas function would then return an array
        of ["multiplied answer","+","543"]. This was achieved using multiple loops and the 
        sumOf function through out the entirety of pemdas. The sumOf function loops through the
        array returned from the pemdas function. This is necessary because javascript does not
        know how to calculate an array with different operators inside of it. The loop allows
        us to tell javascript when to calculate the indexes inside the array. Without this 
        function, the calculator would not work. For example, if the indexes in the calculator 
        were [134,-,13,+,50,+,2], the sumOf function would first get the answer of 134-13 
        which equals 121. The indexes of the calculator would then be [121,+,50,+,2], this 
        process will repeat until the total is calculated. The sumOf function has multiple 
        counters, if statements, a loop, and it calls the setOperator function to make all of 
        this possible. The setOperator function takes in four parameters from the sumOf function.
        Those four are operator, total, answer, and answer2. Operator stands for the type of
        operation the calculation needs, this will be a "+", "-", "x", or "/". The other three
        parameters are just numbers. The function does the calculations for the calculator
        but not all at once. It can only do two numbers at a time. The total parameter returns
        the total calculation of the function. The answer and answer2 parameters are the numbers
        that get calculated. In the previous example where the calculator array was [134,-,13,+,
        50,+,2], 134-13 gets calculated first, setOperator is the reason why. Engineering this
        calculator was the hardest part. I thought this would only take a few hours but between
        my work and life schedule, it took much longer. Much testing had to be done to ensure
        this calculator was legit.`,
    future : `I would love to go beyond basic calculations for this project. The goal at first
        was to have more options besides multiplication, divison, addition, and subtraction.
        That goal changed when I realized this project was going to take longer than expected.
        I want to add calculations like sin, cos, tan, EXP, e and more in the future. The only
        reason I moved on is because I had to add more projects to my portfolio.`,
    video : `calculator`,
    code : `https://github.com/TryHardJ/Calculator-App`
};