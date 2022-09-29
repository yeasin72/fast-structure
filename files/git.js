/**
 * .gitignore file.
 * 
 * Generate gitignore file inside project directoruy 
 * @returns {string} gitignoreCode 
 */
function gitSetup() {
    // Implementation
    // import './App.css';
const git = `
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`
        return git
    }
    exports.gitSetup = gitSetup