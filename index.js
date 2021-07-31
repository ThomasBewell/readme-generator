// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for your project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions for and examples of use.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions if applicable.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'additionalquestions',
        message: 'Enter additional instructions on how to reach you with questions.'
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Choose a license for your project by selecting a number.',
        choices: [
            'Apache license 2.0',
            'Creative Commons Zero v1.0 Universal',
            'Do What The F*ck You Want To Public License',
            'GNU General Public License v3.0',
            'ISC',
            'MIT',
            'The Unlicense'
        ],
        default: 'MIT'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
