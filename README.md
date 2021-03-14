
### Team Profile Generator

## User Story
```md
AS A manager
I WANT to generate a webpage that display's my team's basic information
SO THAT I have quick access to their emails AND GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```


## Description
This is a command-line interface with unit tests using a team profile page.  

Unit testing is done with the Jest library.
Command Line Interface uses the Inquirer npm package.

Email addresses, employee numbers and the manager office number are validated using Regex and sample code from Stack Overflow.

## Directions:
1.  Test using the command line interface with with this command: npm test.
2.  There are 4 test suites, and 16 total tests. Screen shot of tests: ![image](https://user-images.githubusercontent.com/10423865/111054780-504c9600-843d-11eb-8671-3aac0ed4ae1a.png)
3.  To run the profile generator from the command line, use this command: node index.js
4.  User will be prompted to enter the manager's employee number to begin the application. NOTE: all text will be presented as entered!

## Walkthrough video: 
https://github.com/JGreenOS/HW10/blob/master/walkthrough%20with%20outputmp4.mp4


## Sample HTML screenshot: 

![image](https://user-images.githubusercontent.com/10423865/111055046-f4cfd780-843f-11eb-9c76-83f2a969d221.png)


## File structure screenshot:

![image](https://user-images.githubusercontent.com/10423865/111054860-fbf5e600-843d-11eb-9ace-dbea54e8f32a.png)

