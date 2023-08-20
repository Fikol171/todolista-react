const Section = ({ title, body, extraHeaderContent }) => {
  return (
    <main>
      {title}
      {body}
      {extraHeaderContent}
    </main>
  );
};

export default Section;
