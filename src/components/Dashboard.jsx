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

const Dashboard = ({ onStateChange }) => {
  const onStateChangeInDashboard = () => {
    console.log("on State triggered in Dashboard");
    onStateChange();
  };

  return (
    <div>
      <div className="top-bar-container">
        <TopBar onStateChange={onStateChangeInDashboard} />
      </div>
      <div className="card-container">
        {list.map((city, index) => {
          return <Card key={index} city={city} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
