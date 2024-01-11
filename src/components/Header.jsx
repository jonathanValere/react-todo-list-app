import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";

export default function Header({ onClick }) {
  return (
    <header>
      <p>
        <FontAwesomeIcon icon="rectangle-list" />
        Todo list
      </p>
      <FontAwesomeIcon
        icon="circle-half-stroke"
        className={`click ${styles.mode}`}
        onClick={onClick}
      />
    </header>
  );
}
