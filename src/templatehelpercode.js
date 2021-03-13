

//call function to bring all of team here, set parameter to people (because that's what I used in the HTML)
const makeMagic = people => {


    //create the template here with cards (this is manager one)

    const makeManagerMagic = manager => {
        return `
<div class="row justify-content-center">
<div class = "card mt-2 mb-2 employee-card">
<div class = "card-header">
<img src="../dist/Assets/maanger.png" class = "card-img-top" alt="icon of manager">
<h2 class = "card-title">Manager: ${manager.name}</h2>
<div class = "card-body">
<ul class="list-group">
<li class="list-group-item">ID: ${manager.getId()}</li>
<li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
<li class="list-group-item">Office number: ${manager.getoffNum()}</li>
</ul>
</div>
</div>
</div>
</div>
`
    }

    const makeEngineerMagic = engineer => {
        return `
<div class="row justify-content-center">
<div class = "card mt-2 mb-1 employee-card">
<div class = "card-header">
<img src="../dist/Assets/engineer.png" class = "card-img-top" alt="icon of engineer">
<h2 class = "card-title">Engineer : ${engineer.name}</h2>
<div class = "card-body">
<ul class="list-group">
<li class="list-group-item">ID: ${engineer.getId()}</li>
<li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
<li class="list-group-item">GitHub Link: <a href="https://github.com/${engineer.getGithub()}" target="_blank" >${engineer.getGithub()}</a></li>
</ul>
</div>
</div>
</div>
</div>
`
    }

    const makeInternAwesome = intern => {
        return `
<div class="row justify-content-center">
<div class = "card mt-2 mb-1 employee-card">
<div class = "card-header">
<img src="../dist/Assets/intern.png" class = "card-img-top" alt="icon of intern">
<h2 class = "card-title">Intern : ${intern.name}</h2>
<div class = "card-body">
<ul class="list-group">
<li class="list-group-item">ID: ${intern.getId()}</li>
<li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
<li class="list-group-item">Current School: ${intern.getSchool()}</li>
</ul>
</div>
</div>
</div>
</div>
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
        .map(intern => makeInternAwesome(intern))
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
    <title> Project Team Profile Page </title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class = "container-fluid">
            <div class = "jumbotron justify-content-center">
            <h1 class = "text-center"> Project Team Profile</h1>
        </div>
    </div>

<div class = "container">

        <div class = "team-area">
            ${makeMagic(people)}
        </div>
    
</div>
</div>
</div>
</body>
</html>
`;
};

