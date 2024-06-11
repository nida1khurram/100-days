//Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list
// that shows what a computer programmer knows, like coding languages, tools, and software
// frameworks. Find a way to get three specific skills from this list and show them.
// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with
// and understand specific pieces of information.
var computerProgrammerSkil = {
    coding: ["html", "javascript", "typescript"],
    languages: ["english", "french", "japness"],
    tools: ["git", "docker"],
};
var coding = computerProgrammerSkil.coding, languages = computerProgrammerSkil.languages, tools = computerProgrammerSkil.tools;
console.log("Coding: ".concat(coding[0], ", Languages: ").concat(languages[0], ", Tools: ").concat(tools[0]));
