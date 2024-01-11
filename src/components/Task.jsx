import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Task({ ...props }) {
  return (
    <li>
      <input
        type="checkbox"
        name={props.name}
        id={props.name}
        onChange={props.onChange}
      />
      <span className={props.done ? "task-done" : ""}>{props.name}</span>{" "}
      <span onClick={props.onClick} className="click">
        <FontAwesomeIcon icon="trash-can" />
      </span>
    </li>
  );
}
