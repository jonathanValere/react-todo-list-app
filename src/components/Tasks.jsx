import styles from "./Tasks.module.css";

export default function Tasks({ subtitle, numberTasks, children }) {
  return (
    <>
      <p className={styles.numberTasks}>
        {subtitle} <span>{numberTasks}</span>
      </p>
      <ul>{children}</ul>
    </>
  );
}
