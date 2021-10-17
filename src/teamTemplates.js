const cardGenerator = team => {
    //template literal with card to make manager using Manager model method
     const generateManagerCard = manager => {
         return `
         <div class="card employee-card">
         <div class="card-header">
             <h2 class="card-title">${manager.getName()}</h2>
             <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
         </div>
         <div class="card-body">
             <ul class="list-group">
                 <li class="list-group-item">ID: ${manager.getId()}</li>
                 <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                 <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
             </ul>
         </div>
     </div>
         `;
     };


     // html for engineer card
     const generateEngineerCard = engineer => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
        `;
    };
     //html for intern card
     const generateInternCard = intern => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">Scool: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `;
    };

     const html = [];
     html.push(team
         .filter(employee => employee.getRole() === "Manager")
         .map(manager => generateManagerCard(manager))
     );

     html.push(team
         .filter(employee => employee.getRole() === "Engineer")
         .map(engineer => generateEngineerCard(engineer))
     );
     
     html.push(team
         .filter(intern => intern.getRole() === "Intern")
         .map(intern => generateInternCard(intern))
     );
     /// add like above for engineer and intern
     return html.join("");
 }



 // export function to generate entire page
 module.exports = team => {
     return `
     <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
     <title>My Team</title>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
     <link rel="stylesheet" href="./assets/css/style.css">
     <script src="https://kit.fontawesome.com/c502137733.js"></script>
 </head>
 <body>
     <div class="container-fluid">
         <div class="row">
             <div class="col-12 jumbotron mb-3 team-heading" style="
             padding-bottom: 20px;
             padding-top: 20px;
         ">
                 <h1 class="text-center">My Team</h1>
             </div>
         </div>
     </div>
     <div class="container">
         <div class="row">
             <div class="team-area col-12 d-flex justify-content-center">
                 ${cardGenerator(team)}
             </div>
         </div>
     </div>
 </body>
 </html>
     `;
 };