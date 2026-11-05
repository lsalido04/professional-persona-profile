const destinations = {
  "about": "about.html",
  "skill-panel": "about.html#skill-panel",
  "skill-title": "about.html#skill-title",
  "skill-description": "about.html#skill-description",
  "photo-roll-title": "about.html#photo-roll-title",
  "photo-roll": "about.html#photo-roll",
  "experience": "experience.html",
  "persona": "persona.html",
  "persona-part-1": "persona.html#persona-part-1",
  "persona-part-2": "persona.html#persona-part-2",
  "persona-part-3": "persona.html#persona-part-3",
  "persona-part-4": "persona.html#persona-part-4",
  "persona-part-5": "persona.html#persona-part-5",
  "work": "portfolio.html",
  "written-project": "portfolio.html#written-project",
  "written-photo": "portfolio.html#written-photo",
  "written-description": "portfolio.html#written-description",
  "visual-project": "portfolio.html#visual-project",
  "visual-photo": "portfolio.html#visual-photo",
  "visual-description": "portfolio.html#visual-description",
  "technology-project": "portfolio.html#technology-project",
  "technology-photo": "portfolio.html#technology-photo",
  "snapshot": "video.html",
  "contact": "contact.html"
};
const destination = destinations[location.hash.slice(1)];
if (typeof destination === "string") location.replace(destination);
