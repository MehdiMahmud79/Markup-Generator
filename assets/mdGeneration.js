// This is a good README template
function generateMarkdown(data) {
  const readmeContent = `
# ${data.Title}
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${
    data.UserName
  }/${data.Title})
=============

# Description
${"```"}
 ${data.Description}
${"```"}
# Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Test](#test)

* [License](#license)

* [Contact me](#contact)

## Mock-Up

The following animation shows the web application's appearance and functionality:

![${data.Title}.](../screen.gif)

# Installation

The following necessary dependencies must be installed to run the application properly:

${"```"}
${data.Installation}
${"```"}
# Usage

​This application is used for ${data.Usage}

# Test

​follow this to test this app:
${"```"}
 ${data.Test}
${"```"}
# License

This project is license under the ${data.License} license.

# Contact
<${data.Email}>

`;
  return readmeContent;
}

module.exports = generateMarkdown;
