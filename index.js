const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({projectTitle, description, installation, usage, license, contribution, tests, githubUsername, email}) =>
`# ${projectTitle}

## Description
${description}

## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${license} License.

## Contributing
${contribution}

## Tests
${tests}

## Questions
For any questions, you can reach me at [GitHub](https://github.com/${githubUsername}) or by email at ${email}.
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Describe the installation:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the tests?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache', 'GPL', 'GNU', 'BSD', 'None'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address:',
    },
  ])

  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', readmeContent, (err) => 
        err ? console.log(err) : console.log('Successfully created README file!')
    ); 
});
