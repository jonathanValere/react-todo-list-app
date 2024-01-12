import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Task.module.css";

export default function Task({ onClick, ...props }) {
  return (
    <li className={props.done ? styles["task-done"] : ""}>
      <div>
        <input
          type="checkbox"
          name={props.name}
          id={props.name}
          className={styles["custom-checkbox"]}
          onClick={() => onClick("put", props.keyTask)}
        />
        <span className={props.done ? "task-done" : ""}>{props.name}</span>{" "}
      </div>
      <div className={styles["icon-task"]}>
        <span
          onClick={() => onClick("delete", props.keyTask)}
          className="click"
        >
          <FontAwesomeIcon icon="trash-can" />
        </span>
      </div>
    </li>
  );
}
