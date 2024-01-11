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
      <span onClick={props.onClick}>X</span>
    </li>
  );
}
