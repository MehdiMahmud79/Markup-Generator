// This is a good README template
function chooseLicesnse (option){
  var choices= {
  'MIT License': "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  'Apache License':"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  'The GPL License':"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  'Boost Software License 1.0':"[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  'Public Domain (Unlicense)':"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
}
return choices[option];
}
function generateMarkdown(data) {
  const myLicense= chooseLicesnse(data.License);

  const readmeContent = `
  <!--Markup tamplate generator -->
${myLicense}

# ${data.Title}

# Description
${"```"}
${data.Description}
${"```"}
# Table of Contents 

* [Badges](#badges)

* [Installation](#installation)

* [Usage](#usage)

* [Features](#features)

* [Contribute](#contribute)

* [Test](#test)

* [License](#license)

* [Questions](#questions)

## 🚀 Mock-Up

The following animation shows the web application's appearance and functionality:

![${data.Title}.](../demo.gif)
<!--change this to your video link -->
🔴📺 https://youtu.be/HbiGOmWcUL0

# Badges
![badmath](https://img.shields.io/github/issues/${data.UserName}/${data.Title})
![badmath](https://img.shields.io/github/forks/${data.UserName}/${data.Title})
![badmath](https://img.shields.io/github/stars/${data.UserName}/${data.Title})

# 🛠️ Installation

The following necessary dependencies must be installed to run the application properly:

${"```bash"}
${data.Installation}
${"```"}
# Usage

​🏆 This application is used for ${data.Usage}

## 🍰 Contribute
${"```"}
 ${data.Contribute}
${"```"}
## 🧐 Features

${"```"}
 ${data.Features}
${"```"}
# Test

​follow this to test this app:
${"```"}
 ${data.Test}
${"```"}

# License

This project is license under the ${myLicense}.




________________________________________________________________________________________________

# Questions
- If you have any question please contact me using <${data.Email}>.
Or
- ![GitHub](https://github.com/${data.UserName}
`
  return readmeContent;
}

module.exports = generateMarkdown;
