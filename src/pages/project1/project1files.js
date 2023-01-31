export const project1 = {
    name : `Employee Reimbursement Service API`,
    summary :`This project is an API for employees to submit reimbursement requests and
        managers to approve or deny the submitted request. Employees or Managers, can register
        with a unique email and password combination, and log into the application with said 
        combination. Employees can submit a new reimbursement ticket with a type(travel, food, car rental, etc),
        a dollar amount, a description, and a default status of "Pending". Employees can view
        all of their previous reimbursement ticket submissions, filter the list of tickets by 
        status(pending, approved, or denied), and edit their first and last name. As a manager, you
        can "approve" or "reject" tickets submitted by employees, and access a queue of pending tickets
        that only managers can see. When the Employee or Manager logs in, a Jwt sercurity token is
        returned.`,
    responsibilities : [`Owner/Developer`,
                `Built the database and tables in azure data studio`,
                `Developed the Apilayer, Businesslayer, Repolayer, and Modelslayer using the repository pattern`,
                `Developed every action method for the controllers`,
                `Developed DQL and DML to query or manipulate SQL in the database depending on the action method`,
                `Built JWT Authentication so that a token is returned every time the client logs in`,
                `Tested API with Swagger`,
                `Built custom logger for Repolayer`],
    technologies : `C#, .NET, ASP.NET Core Web API, ADO.NET, Azure SQL Database, Swagger, xUnit Testing`,
    video : `ersapi`,
    code : `https://github.com/221114-NET/JordanDickersonRevatureProject1`
};