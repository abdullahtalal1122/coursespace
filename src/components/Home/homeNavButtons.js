import Button from "../button";

const HomeNavButtons = () => {
  return (
    <div>
      <Button
        value="Sign In"
        primryColor="#127C71"
        backgroundColor="#fff"
        border="2px solid #127C71"
        margin="0px 10px 0px 0px"
      ></Button>
      <Button value="Sign Up" />
    </div>
  );
};
export default HomeNavButtons;
