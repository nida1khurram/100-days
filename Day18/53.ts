//Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list
// that shows what a computer programmer knows, like coding languages, tools, and software
// frameworks. Find a way to get three specific skills from this list and show them.

// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with
// and understand specific pieces of information.
let computerProgrammerSkil={
    coding:["html","javascript","typescript"],
    languages:["english","french","japness"],
    tools:["git","docker"],
}
let {coding, languages,tools} = computerProgrammerSkil
console.log(`Coding: ${coding[0]}, Languages: ${languages[0]}, Tools: ${tools[0]}`)