// Step 1: Define the person object with age, experience, and skills
let person = {
    name: "Rishabh",
    age: 24,
    experience: 3, 
    skills: ["JavaScript", "C++", "React"]
};

// Step 2: Define the task requirements
let requiredSkills = ["JavaScript", "C++"];
let minAge = 18;
let maxAge = 60;
let minExperience = 1;

// Step 3: Create a function to check if the person is eligible for the task
function isEligible(person) {
    // Step 4: Use conditional logic with logical operators &&, ||, and array method includes()
    if (person.age >= minAge && person.age <= maxAge &&
        person.experience >= minExperience &&
        requiredSkills.every(skill => person.skills.includes(skill))) {
        
        return `${person.name} is eligible for the task.`;
    } else {
        return `${person.name} is NOT eligible for the task.`;
    }
}


console.log(isEligible(person));

let anotherPerson = {
    name: " vipin",
    age: 25,
    experience: 1, 
    skills: ["JavaScript", "React"]
};

console.log(isEligible(anotherPerson));
