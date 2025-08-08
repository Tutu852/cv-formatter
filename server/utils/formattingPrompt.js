module.exports = function (cvText) {
  return `
You are a professional resume formatter. Apply the following rules to structure and rewrite this CV text:

Typography & Structure:
- Font: Palatino Linotype
- Date Format: Use 'Jan 2020' style
- Capitalize job titles
- Convert paragraphs into bullet points
- Professional tone

Content Structure:
1. Header: Name, Job Title, Photo
2. Personal Details
3. Profile
4. Experience (reverse chronological)
5. Education
6. Key Skills
7. Interests

Fix:
- "I am responsible for" → "Responsible for"
- "Principle" → "Principal", "Discrete" → "Discreet"
- Remove age/dependents

Now format the following CV:
${cvText}
  `;
};
