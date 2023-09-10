const Button = ({
  value,
  primryColor = "#fff",
  backgroundColor = "#127C71",
  border = "none",
  borderRadius = "10px",
  padding = "10px 15px",
  fontWeight = "600",
  margin = "0",
}) => {
  return (
    <button
      style={{
        backgroundColor,
        color: primryColor,
        border,
        borderRadius,
        padding,
        fontWeight,
        margin,
        cursor: "pointer",
      }}
    >
      {value}
    </button>
  );
};

export default Button;
