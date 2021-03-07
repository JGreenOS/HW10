//call function to bring all of team here, set parameter to people (because that's what I used in the HTML)

//create the template here with cards (this is manager one)

// class = card
// class = card-header
// class = card-title
// class = card-body


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



// end of function to create html

// make the page with all html and correctly organized cards

// boilerplate HTML
`
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
<div class = "jumbotron"> My Team Profile </div>
</div>
</div>

<div class = "container">
<div class = "row">
<div class = "card">
${makeMagic(people)}
</div>
</div>
</div>

</body>

</html>
`;


