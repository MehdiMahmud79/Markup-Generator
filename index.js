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

// creat a directory for the generated readme file
fs.mkdir("./generatedMD", { recursive: true }, (err) => {
  if (err) {
    log(err);
  }
});

// initialization function
function init() {
  prompts(content)
    .then((answers) =>
      writeFileAsync(
        `./generatedMD/${answers.UserName}_README.md`,
        MdGeneration(answers)
      )
    )
    .then(() => log(`Successfully wrote to ./generatedMD/ folder`))
    .catch((err) => console.error(err));
}

// run the app
init();
