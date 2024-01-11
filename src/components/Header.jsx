import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ onClick }) {
  return (
    <header>
      <FontAwesomeIcon icon="rectangle-list" />
      Todo list
      <FontAwesomeIcon
        icon="circle-half-stroke"
        className="click"
        onClick={onClick}
      />
    </header>
  );
}
