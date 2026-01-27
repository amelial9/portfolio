import './Skills.css';

function Skills() {
  const programmingLanguages = ['Python', 'Java', 'SQL', 'JavaScript', 'HTML/CSS'];
  const tools = ['Azure SQL Database', 'Git/GitHub', 'Jupyter Notebook', 'Docker', 'Unity'];

  return (
    <div className="skills-section">
      <div className="section-title-wrapper">
        <h2 className="section-title">Technical Skills</h2>
      </div>
      
      <div className="skills-content">
        <div className="skills-category">
          <h3 className="skills-category-title">Programming Languages</h3>
          <div className="skills-list">
            {programmingLanguages.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Tools</h3>
          <div className="skills-list">
            {tools.map((tool, index) => (
              <span key={index} className="skill-tag">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
