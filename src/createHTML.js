// Generate the Manager Card
const generateManagerCard = function (manager) {
    return `
    <div class="col-4 mt-5">
        <div class="card h-100">
            <div class="card-header text-center bg-info">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
            <div class="card-body bg-secondary text-white">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}



// create the Engineer Card
const generateEngineerCard = function (engineer) {
    return `
    <div class="col-4 mt-5">
        <div class="card h-100">
            <div class="card-header text-center bg-info">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </div>
            <div class="card-body bg-secondary text-white">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create the Intern Card
const generateInternCard = function (intern) {
    return `
    <div class="col-4 mt-5">
        <div class="card h-100">
            <div class="card-header text-center bg-info">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </div>
            <div class="card-body bg-secondary text-white">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};


createHTML = (data) => {

    // create card array
    cardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        if (role === 'Manager') {
            const managerCard = generateManagerCard(employee);

            cardArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineerCard(employee);

            cardArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateInternCard(employee);

            cardArray.push(internCard);
        }
        
    }

    // join the strings together 
    const employeeCards = cardArray.join('')

    // return to generated page
    const generateTeam = generateTeamProfile(employeeCards); 
    return generateTeam;

}

// create html page 
const generateTeamProfile = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center bg-secondary text-white" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  </html>
`;
}

module.exports = createHTML;