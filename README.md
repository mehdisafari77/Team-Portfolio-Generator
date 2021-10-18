# Team-Portfolio-Generator
this is a project that creates a Team Profile after prompting multiple questions in the terminal using node.js. After the questions are answered the generator will generate an html file using "inquirer" and "fs.writeFile" from the NPM library. 

## Getting Started
1. First open Terminal.
2. Navigate to repo file.
3. enter in Terminal "npm install" in order to install all dependecies.
4. Start the Team generation by running "node index.js" within your Terminal.
6. After all questions are answered, a file under the name "team.html" will be generated for you with the information that was given to Terminal as answers to the prompts.

## Screenshot Of Generated Website
<img width="912" alt="Screenshot 2021-10-17 at 19 01 55" src="https://user-images.githubusercontent.com/75599021/137659288-f59be078-be08-4280-bb20-1906474929bf.png">

## Screenshot Of Questions + Answers In Terminal
<img width="626" alt="Screenshot 2021-10-17 at 19 02 21" src="https://user-images.githubusercontent.com/75599021/137659410-8c135452-699b-4f10-90ec-2f452ea1bb4d.png">

## Screenshot Of Tests
<img width="513" alt="Screenshot 2021-10-17 at 19 13 55" src="https://user-images.githubusercontent.com/75599021/137659325-53f234a4-0f6f-405f-9028-f55fa9216b7b.png">

## Gif Of How To Run Tests
![ezgif com-gif-maker](https://user-images.githubusercontent.com/75599021/137659352-7f8e18de-bc35-4978-9c99-e344fed1840a.gif)

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/)
* [Node.js](https://nodejs.org/en/docs/)
* [NPM-Library](https://docs.npmjs.com/)

## Code Snippet Of Team Generation
```javascript
    createTeam = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "createTeam",
                message: "Would role would you like to add?",
                choices: ["Engineer", "Intern", "Manager", "No members"]
            }
        ]).then(response => {
            switch(response.createTeam) {
                case "Engineer": 
                engineerPrompt()
                break;

                case "Intern": 
                internPrompt()
                break;

                case "Manager": 
                managerPrompt()
                break;

                default: 
                createTeamCards()
            }
        })
    }
```

## Author

* **Mehdi Safari**
- [Link to Github](https://github.com/mehdisafari77)
- [Link to LinkedIn](https://www.linkedin.com/in/mehdi-safari-992799142/)


