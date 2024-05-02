import Card from "./Card";

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
    <div className="card-container">
      {list.map((city, index) => {
        return <Card key={index} city={city} />;
      })}
    </div>
  );
};

export default Dashboard;
