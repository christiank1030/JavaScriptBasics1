// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Implementation
// Design
// Maintain
// Analysis of Requirements
// Testing & Integration
// Planning

let sdlc = ['Planning', 'Analysis of Requirements', 'Design', 'Implementation', 'Testing and Integration', 'Maintain']

for(let i = 0; i <sdlc.length; i++) {
    console.log(sdlc[i]);
}

//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 

let analysisOfRequirements = "When analyzing requirements, developers need to determine what their project is going to do and what resources are needed to complete the project."

let design = "In the design step, developers decide how the software will work and look. Examples of steps in the design stage include architecture and user interface."

let implementation = "This is the step where developers start coding and turn their concept into reality."

let testingAndIntegration = "During testing and integration, the written code is tested for any bugs or inconsistencies."

let maintain = "New requirements and technologies will require developers to update their project by iterating through the software development life cycle again to make sure their program can accommodate these changes."

console.log(planning);
console.log(analysisOfRequirements);
console.log(design);
console.log(implementation);
console.log(testingAndIntegration);
console.log(maintain);