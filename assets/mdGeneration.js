// This is a good README template
function generateMarkdown(data) {
  const readmeContent = `
# ${data.Title}

# Description
${"```"}
 ${data.Description}
${"```"}
# Table of Contents 

* [Badges](#badges)

* [Installation](#installation)

* [Usage](#usage)

* [Test](#test)

* [License](#license)

* [Contact me](#contact)

## Mock-Up

The following animation shows the web application's appearance and functionality:

![${data.Title}.](../screen.gif)

# Badges
![badmath](https://img.shields.io/github/issues/${data.UserName}/${data.Title})
![badmath](https://img.shields.io/github/forks/${data.UserName}/${data.Title})
![badmath](https://img.shields.io/github/stars/${data.UserName}/${data.Title})

# Installation

The following necessary dependencies must be installed to run the application properly:

${"```"}
${data.Installation}
${"```"}
# Usage

​🏆 This application is used for ${data.Usage}

# Test

​follow this to test this app:
${"```"}
 ${data.Test}
${"```"}
# License

This project is license under the ${data.License} license.
![badmath](https://img.shields.io/github/license/${data.UserName}/${data.Title})
________________________________________________________________________________________________

# Contact
<${data.Email}>

`
  return readmeContent;
}

module.exports = generateMarkdown;
