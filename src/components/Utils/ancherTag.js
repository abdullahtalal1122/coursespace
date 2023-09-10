const AncherTag = ({
  link,
  value,
  textDecoration = "none",
  primaryColor = "#9E9E9E",
  padding = "10px 20px",
  fontSize = "16px",
}) => {
  return (
    <a
      href={link}
      style={{
        color: primaryColor,
        textDecoration,
        padding,
        fontSize,
      }}
    >
      {value}
    </a>
  );
};

export default AncherTag;
