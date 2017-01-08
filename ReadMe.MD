
This is a Dojo1.10.3 boilerplate example, Grunt is used for the build , this was scaffolded using the yeoman generator for Dojo

<b>Dojo Yeoman Generator </b>
https://github.com/bryanforbes/generator-dojo <i>Warning, using closure or shrinksafe as the compiler option will cause the build to fail use UGLIFY!!!!!!!</i> NB: no idea why this is guessing some node modules are missing.

UPDATED to include Dgrid, layering (loading in chunks), css can be layered, checkout the app.profile.js in the profiles folder
## Code Example

to buid use grunt build, will create a dist folder, use grunt --verbose for a detailed output, use grunt --force to force deleting previous dist folder

<b>Important, if you add modules, make sure you tell dojo to include them in the bundle(s) or layers are they are known in Dojo,in the profile folder there is app.profile.js file.</b>

## Motivation

To help with Dojo builds, they are painfull!

## Installation

you need to have node & gulp installed, however all depenent modules & Dojo dependencies are included in the repo

## License

No license for the project apart from the license(s) for the inlcuded dependencies.
