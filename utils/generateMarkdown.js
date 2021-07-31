const badge = require('./renderLicenseBadge');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${badge[data.license]}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Email: ${data.email}
  GitHub: [${data.github}](https://github.com/${data.github})
  ${data.additionalquestions}

  ## License
  This project is licensed under the terms of the ${data.license} license.
`;
}

module.exports = generateMarkdown;