import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ ...props }) {
  return (
    <div className={styles.modal}>
      <p>
        La tâche <span className={styles.taskDeleted}>"{props.value}"</span> a
        bien été supprimée.
      </p>
      <span title="Close">
        <FontAwesomeIcon icon="xmark" onClick={props.onClick} />
      </span>
    </div>
  );
}
