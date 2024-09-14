"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.getElementById('generateBtn')?.addEventListener('click', () => {
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const contact = document.getElementById('contact')?.value;
    const linkedin = document.getElementById('linkedin')?.value;
    const address = document.getElementById('address')?.value;
    const matric = document.getElementById('matric')?.value;
    const intermediate = document.getElementById('intermediate')?.value;
    const degree = document.getElementById('degree')?.value;
    const skill1 = document.getElementById('skill1')?.value;
    const skill2 = document.getElementById('skill2')?.value;
    const skill3 = document.getElementById('skill3')?.value;
    const experience = document.getElementById('experience')?.value;
    const resumeHTML = `
        <h1 contenteditable="true">${name}</h1>
        <p contenteditable="true">Email: ${email}</p>
        <p contenteditable="true">Contact: ${contact}</p>
        <p contenteditable="true">LinkedIn: ${linkedin}</p>
        <p contenteditable="true">Address: ${address}</p>
        <h2>Education</h2>
        <p contenteditable="true">Matriculation: ${matric}</p>
        <p contenteditable="true">Intermediate: ${intermediate}</p>
        <p contenteditable="true">Degree: ${degree}</p>
        <h2>Skills</h2>
        <p contenteditable="true">${skill1}</p>
        <p contenteditable="true">${skill2}</p>
        <p contenteditable="true">${skill3}</p>
        <h2>Experience</h2>
        <p contenteditable="true">${experience}</p>
    `;
    const resumeDiv = document.getElementById('resume');
    resumeDiv.innerHTML = resumeHTML;
    resumeDiv.style.display = 'block';
    resumeDiv.contentEditable = 'true'; 
});
document.getElementById('downloadBtn')?.addEventListener('click', () => {
    const resumeContent = document.getElementById('resume')?.innerHTML;
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.html';
    link.click();
});
