const GridCard = ({ icon, heading, paragraph, GridClass, GridItemClass }) => {
  return (
    <div className={`${GridClass} ${GridItemClass}`}>
      <div>
        <i>{icon}</i>
      </div>
      <div>
        <h6
          style={{
            lineHeight: "1.4",
            fontWeight: "600",
            color: "#ffaf35",
            fontSize: "1rem",
            marginBottom: "8px",
          }}
        >
          {heading}
        </h6>
        <p
          style={{
            margin: "0",
            fontSize: "0.85rem",
            fontWeight: "400",
            color: "#717171",
            lineHeight: "1.3",
          }}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};
export default GridCard;
