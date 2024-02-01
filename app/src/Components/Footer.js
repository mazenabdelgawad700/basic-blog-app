const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        {length} {length === 1 ? "Task" : "Tasks"}
      </p>
    </footer>
  );
};

export default Footer;
