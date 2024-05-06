import Toggle from "./Toggle";

const TopBar = (props) => {
  return (
    <div className="top-bar">
      <h1 className="color-light-accent">Weather</h1>
      <Toggle />
    </div>
  );
};

export default TopBar;
