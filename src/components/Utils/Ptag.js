const Ptag = ({
  value,
  primryColor = "#717171",
  border = "none",
  padding = "10px",
  fontWeight = "400",
  fontSize = "14px",
  margin = "0",
}) => {
  return (
    <p
      style={{
        color: primryColor,
        border,
        padding,
        fontWeight,
        margin,
        fontSize,
      }}
    >
      {value}
    </p>
  );
};

export default Ptag;
