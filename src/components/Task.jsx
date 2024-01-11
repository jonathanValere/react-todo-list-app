import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Task.module.css";

export default function Task({ ...props }) {
  return (
    <li className={props.done ? styles["task-done"] : ""}>
      <div>
        <input
          type="checkbox"
          name={props.name}
          id={props.name}
          onChange={props.onChange}
          className={styles["custom-checkbox"]}
        />
        <span className={props.done ? "task-done" : ""}>{props.name}</span>{" "}
      </div>
      <span onClick={props.onClick} className="click">
        <FontAwesomeIcon icon="trash-can" />
      </span>
    </li>
  );
}
