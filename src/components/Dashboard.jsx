import Card from "./Card";
import TopBar from "./TopBar";

const list = [
  "Toronto",
  "Vancouver",
  "Montreal",
  "Calgary",
  "Ottawa",
  "Edmonton",
  "Winnipeg",
  "Hamilton",
];

const Dashboard = () => {
  return (
    <div>
      {/*<div className="top-bar-container">
        <TopBar />
  </div>
      <div className="gradient"></div>*/}
      <div className="card-container">
        {list.map((city, index) => {
          return <Card key={index} city={city} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
