const cardGenerator = team => {
    //template literal with card to make manager using Manager model method
     const generateManagerCard = manager => {
         return `
         <div class="card employee-card" style="
         margin-right: 10px;
         margin-left: 10px;
         margin-bottom: 10px;
        ">
        <div class="card-header" style="
        background: linear-gradient(315deg, #020501 15%, #f57b35 84%);
        color: #fff;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        ">
             <h2 class="card-title">${manager.getName()}</h2>
             <h5 class="card-title" style="
             margin-left: 10px;
             margin-right: 10px;
            ">
         <i class="fas fa-briefcase mr-2"></i>${manager.getRole()}</h5>
         </div>
         <div class="card-body">
             <ul class="list-group">
                 <li class="list-group-item"><i class="fas fa-fingerprint mr-1"></i>ID: ${manager.getId()}</li>
                 <li class="list-group-item"><i class="fas fa-envelope mr-1"></i>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                 <li class="list-group-item"><i class="fas fa-building mr-1"></i>Office number: ${manager.getOfficeNumber()}</li>
             </ul>
         </div>
     </div>
         `;
     };


     // html for engineer card
     const generateEngineerCard = engineer => {
        return `
        <div class="card employee-card" style="
        margin-right: 10px;
        margin-left: 10px;
        margin-bottom: 10px;
        ">
        <div class="card-header" style="
        background: linear-gradient(315deg, #020501 15%, #f57b35 84%);
        color: #fff;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        ">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h5 class="card-title" style="
            margin-left: 10px;
            margin-right: 10px;
            ">
            <i class="fas fa-cogs mr-2"></i>${engineer.getRole()}</h5>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"><i class="fas fa-fingerprint mr-1"></i>ID: ${engineer.getId()}</li>
                <li class="list-group-item"><i class="fas fa-envelope mr-1"></i>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item"><i class="fab fa-github mr-1"></i>Github: <a href="https://github.com/" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `;
    };
     //html for intern card
     const generateInternCard = intern => {
        return `
        <div class="card employee-card" style="
        margin-right: 10px;
        margin-left: 10px;
        margin-bottom: 10px;
        ">
        <div class="card-header" style="
        background: linear-gradient(315deg, #020501 15%, #f57b35 84%);
        color: #fff;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        ">
            <h2 class="card-title">${intern.getName()}</h2>
            <h5 class="card-title" style="
            margin-left: 10px;
            margin-right: 10px;
            ">
            <i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h5>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"><i class="fas fa-fingerprint mr-1"></i>ID: ${intern.getId()}</li>
                <li class="list-group-item"><i class="fas fa-envelope mr-1"></i>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item"><i class="fas fa-graduation-cap mr-1"></i>School: ${intern.getSchool()}</li>
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
     <title>The Office</title>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
     <link rel="stylesheet" href="./assets/css/style.css">
     <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200&display=swap" rel="stylesheet">
     <script src="https://kit.fontawesome.com/c502137733.js"></script>
 </head>
 <body style="background: linear-gradient(315deg, #fddbaf  15%, #f5ba8a 84%);">
     <div class="container-fluid" style="
     font-family: 'Crimson Pro', serif;">
         <div class="row">
             <div class="col-12 jumbotron mb-3 team-heading" style="
             padding-bottom: 20px;
             padding-top: 20px;
             background: linear-gradient(315deg, #020501 15%, #f57b35 84%);
             color: #fff;
             ">
                 <h1 class="text-center" style="color: #fff">Dunder Mifflin Paper Company</h1>
             </div>
         </div>
     </div>
     <div class="container-fluid">
         <div class="row">
             <div class="team-area col-12" style="
             font-family: 'Crimson Pro', serif;
             display: flex;
             flex-direction: row;
             flex-wrap: wrap;
             align-content: center;
             justify-content: center;
             align-items: center;
             ">
                 ${cardGenerator(team)}
             </div>
         </div>
     </div>
 </body>
 </html>
    `;
 };