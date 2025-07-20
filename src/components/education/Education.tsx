import "./Education.css";

const education = [
  {
    school: "ENSIAS : Engineering cycle - Rabat",
    period: "2020-2023",
    desc: "Web engineering and Mobile computing at the national superior school of computer science and systems analysis"
  },
  {
    school: "Pythagore CPGE - Oujda",
    period: "2018-2020",
    desc: "2 Years in Preparatory Classes | MP (Mathematics and Physics)"
  },
  {
    school: "Lala Asmae high school - Oujda",
    period: "2017-2018",
    desc: "Baccalaureate (Very Good) | Physics"
  }
];

const Education = () => (
  <section className="education-section" id="education">
    <div className="education-header">
      <h2 className="magic-text">
        My <span className="magic-text">Education</span>
      </h2>
      <p className="skills-desc">
        I've worked with a variety of technologies in the web development world.
            Here's a snapshot of my technical expertise.
          </p>
        </div>
    <div className="education-list">
      {education.map((item, idx) => (
        <div key={idx} className="education-item">
          <div className="education-main">
            <div className="education-school">{item.school}</div>
            <div className="education-desc">{item.desc}</div>
          </div>
          <div className="education-period">{item.period}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
