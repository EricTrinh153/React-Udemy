import "./Card.css";
function Card(props) {
  const classname = props.className + " card";
  return <div className={classname}>{props.children}</div>;
}

export default Card;
