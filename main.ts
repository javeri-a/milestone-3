document.getElementById('generateBtn')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement)?.value;
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const contact = (document.getElementById('contact') as HTMLInputElement)?.value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement)?.value;
    const address = (document.getElementById('address') as HTMLInputElement)?.value;
    const matric = (document.getElementById('matric') as HTMLInputElement)?.value;
    const intermediate = (document.getElementById('intermediate') as HTMLInputElement)?.value;
    const degree = (document.getElementById('degree') as HTMLInputElement)?.value;
    const skill1 = (document.getElementById('skill1') as HTMLInputElement)?.value;
    const skill2 = (document.getElementById('skill2') as HTMLInputElement)?.value;
    const skill3 = (document.getElementById('skill3') as HTMLInputElement)?.value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value;

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

    const resumeDiv = document.getElementById('resume') as HTMLDivElement;
    resumeDiv.innerHTML = resumeHTML;
    resumeDiv.style.display = 'block';
    resumeDiv.contentEditable = 'true'; // Makes the entire resume editable
});

document.getElementById('downloadBtn')?.addEventListener('click', () => {
    const resumeContent = (document.getElementById('resume') as HTMLDivElement)?.innerHTML;
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.html';
    link.click();
});
