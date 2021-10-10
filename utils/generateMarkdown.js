// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  }

  var badge = '';

  switch(license) {
    case 'MIT':
       badge = 'MIT-yellow';
       break;
    case 'ISC':
      badge = 'ISC-blue';
      break;
    case 'GNU AGPLv3':
      badge = 'AGPL%20v3-blue';
      break;
    case 'GNU GPLv3':
      badge = 'GPLv3-blue';
      break;
    case 'GNU LGPLv3':
      badge = 'LGPL%20v3-blue';
      break;
    case 'Mozilla Public License 2.0':
      badge = 'MPL%202.0-brightgreen'
      break;
    case 'Apache License 2.0':
      badge = 'Apache%202.0-blue';
      break;
    case 'Boost Software License 1.0':
      badge = 'Boost%201.0-lightblue';
      break;
    case 'Unlicense':
      badge = 'Unlicense-blue';
      break;
  }

  return `[![License: ${license}](https://img.shields.io/badge/License-${badge}.svg)]`;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  }

  var badgeLink = '';

  switch(license) {
    case 'MIT':
       badgeLink = 'https://opensource.org/licenses/MIT';
       break;
    case 'ISC':
      badgeLink = 'https://opensource.org/licenses/ISC';
      break;
    case 'GNU AGPLv3':
      badgeLink = 'https://www.gnu.org/licenses/agpl-3.0';
      break;
    case 'GNU GPLv3':
      badgeLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'GNU LGPLv3':
      badgeLink = 'https://www.gnu.org/licenses/lgpl-3.0';
      break;
    case 'Mozilla Public License 2.0':
      badgeLink = 'https://opensource.org/licenses/MPL-2.0'
      break;
    case 'Apache License 2.0':
      badgeLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Boost Software License 1.0':
      badgeLink = 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case 'Unlicense':
      badgeLink = 'http://unlicense.org/';
      break;
  }

  return `(${badgeLink})`;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }

  return `## License
  Licensed under the [${license}]${renderLicenseLink(license)} license.
  `;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can contact me through [GitHub](https://github.com/${data.githubName}) or [email](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
