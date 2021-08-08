const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "UserName",
    default: 'Guest'

  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
    default: 'Guest@company.com'

  },

  {
    type: "input",
    message: "What is the title for your project?",
    name: "Title",
    default: 'Demo'

  },
  {
    type: "input",
    message: "Please give description of your project.",
    name: "Description",
    default: 'This project is a demo'

  },
  {
    type: "input",
    message: "What necessary dependencies must be installed to run this app?",
    name: "Installation",
    default: 'npm install\nnpm install requirer'

  },
  {
    type: "input",
    message: "What is this app used for?",
    name: "Usage",
  },
  {
    type: "input",
    message: "How to contribute in this project?",
    name: "Contribute",
  },
  {
    type: "input",
    message: "Project Features?",
    name: "Features",
  },
  {
    type: "input",
    message: "How to test your app?",
    name: "Test",
    default: 'jest'
  },
  {
    type: "list",
    message: "What license was used for this README?",
    name: "License",
    choices: ['MIT License','Apache License','The GPL License','Affero GPL','Public Domain (Unlicense)']

  },
  
];
module.exports = questions;
