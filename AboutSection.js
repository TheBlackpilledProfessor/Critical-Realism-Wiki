// Reusable component for rendering about modal sections
function AboutSection({ section }) {
  return (
    <div className="about-section">
      <h3>{section.title}</h3>
      {section.content && (
        <div dangerouslySetInnerHTML={{ __html: section.content }} />
      )}
      {section.subsections && section.subsections.map((subsection, idx) => (
        <div key={idx}>
          <h4>{subsection.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: subsection.content }} />
        </div>
      ))}
    </div>
  );
}