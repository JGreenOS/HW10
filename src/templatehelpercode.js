

//call function to bring all of team here, set parameter to people (because that's what I used in the HTML)
const makeMagic = people => {


    //create the template here with cards (this is manager one)

    const makeManagerMagic = manager => {
        return `
    <div class = "card employee-card">
<div class = "card-header">
<h2 class = "card-title">${manager.getName()}</h2>
<div class = "card-body">


        //create the template here with cards (this is engineer one)
        // class = card
        // class = card-header
        // class = card-title
        // class = card-body

        //create the template here with cards (this is intern one)
        // class = card
        // class = card-header
        // class = card-title
        // class = card-body


`
    }
    // end of function to create html

    const sortPeople = [];

    sortPeople.push(people
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => makeManagerMagic(manager))
    );
    sortPeople.push(people
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => makeEngineerMagic(engineer))
        .join("")
    );
    sortPeople.push(people
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => makeInternMagic(intern))
        .join("")
    );

    return sortPeople.join("");

}
// make the page with all html and correctly organized cards

// boilerplate HTML
module.exports = people => {

    return `
<!DOCTYPE html>
<html lang = "en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class = "container">
        <div class = "row">
            <div class = "jumbotron">
            <h1> My Team </h1>
            </div>
        </div>
    </div>

<div class = "container">
    <div class = "row">
        <div class = "team-area col-12 d-flex justify-content-center>
            ${makeMagic(people)}
        </div>
    </div>
</div>

</body>
</html>
`;
};

