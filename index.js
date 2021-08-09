// imports
const prompts = require("inquirer").prompt;
const MdGeneration = require("./assets/mdGeneration");
const fs = require("fs");
const util = require("util");
const log = console.log;

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// Questions asked to the user
const content = require("./assets/content");

// initialization function
function init() {
  prompts(content)
    .then((answers) =>
      writeFileAsync("README.md", MdGeneration(answers))
    )
    .then(() => log(`README file sSuccessfully created`))
    .catch((err) => console.error(err));
}

// run the app
init();
