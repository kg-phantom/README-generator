// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return ''
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

  return `![License: ${license}](https://img.shields.io/badge/License-${badge}.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return ''
  }

  return `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
[GitHub](https://github.com/${data.githubName})
[Email](${data.email})
`;
}

module.exports = generateMarkdown;
