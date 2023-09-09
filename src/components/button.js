const Button = ({
  value,
  primryColor = "#fff",
  backgroundColor = "#127C71",
  border = "none",
  borderRadius = "20px",
  padding = "10px 20px",
  fontWeight = "bold",
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
      }}
    >
      {value}
    </button>
  );
};

export default Button;
