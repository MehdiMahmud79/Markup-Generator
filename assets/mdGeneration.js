
// This is a good README template
function generateMarkdown(data) {
  
const readmeContent= `
# ${data.Title}
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.UserName}/${data.Title})

# Description
${"```"}
${data.Description}
${"```"}
# Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

## Mock-Up

The following animation shows the web application's appearance and functionality:

![${data.Title}.](../screen.gif)

# Installation

The following necessary dependencies must be installed to run the application properly: ${data.Installation}

# Usage

​This application is used for ${data.Usage}

# License

This project is license under the ${data.License} license.

`
return readmeContent
   
}

module.exports = generateMarkdown;
