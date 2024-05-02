const Card = (props) => {
  return (
    <div className="card">
      <h2>Card</h2>
      <p>This is a {props.city}</p>
    </div>
  );
};

export default Card;
