import { useState } from "react";
import Task from "./Task";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Content.module.css";
import illuEmpty from "../assets/img/empty.svg";
import PutTask from "./PutTask";

export default function Content() {
  // STATES ----------------------------------------
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [put, setPut] = useState(false);

  // GESTIONNAIRES --------------------------------------
  // CRUD ----------
  // Ajouter une tâche ---------
  const handleAddTask = () => {
    // Création d'une copie de la liste
    const newList = [...list];
    // Le champs est rempli, on insère la tâche dans la liste
    if (task) {
      // Insertion de la tâche dans la nouvelle liste
      newList.push({ id: list.length + 1, nameTask: task, done: false });

      // En cas de tâches déjà réalisées, les mettre en bas de liste
      const listDone = newList.filter((task) => task.done === true);
      const listToDo = newList.filter((task) => task.done === false).reverse();
      const newListUpdated = [...listToDo, ...listDone];
      // Mise à jour le state (list)
      setList(newListUpdated);
      setTask("");
    }
  };

  const handleGenericTask = (id, reqName) => {
    // Supprimer la tâche-----------
    if (reqName === "delete") {
      // Création d'une copie de la liste
      const newList = [...list];
      // Retirer la tâche dont l'id est renseigné en argument
      const newListUpdated = newList.filter((task) => task.id !== id);
      // Mise à jour le state (list) avec la copie
      return setList(newListUpdated);
    }
    // Modifier une tâche -----
    if (reqName === "put") {
      const newList = [...list];
      const getTask = newList.filter((task) => task.id === id);
      return console.log("En cours d'implémentation");
    }
  };

  //Liste tâches et fonctionnalités de la searchbar ---
  const listTasks = list.map((task) => {
    if (task.nameTask.includes(search)) {
      return (
        <Task
          key={task.id}
          keyTask={task.id}
          name={task.nameTask}
          id={task.nameTask}
          onChange={() => handleTaskDone(task.id)}
          onClick={handleGenericTask}
          done={task.done}
        />
      );
    }
  });

  // Tâche réalisée ou non --------
  const handleTaskDone = (id) => {
    // Création d'une copie de la liste
    const newList = [...list];
    // Parcourir la nouvelle liste
    newList.map((task) => {
      // Mettre la tâche à true
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    // ! Les tâches barrées devront être affichées en bas de la liste ---
    // Séparation en 2 tableaux. Un pour les tâches réalisées et l'autre pour les tâches à faire
    const listDone = newList.filter((task) => task.done === true);
    const listToDo = newList.filter((task) => task.done === false);
    // Fusionner les tableaux en mettant insérant les tâches réalisées à la fin de la liste
    const newListUpdated = [...listToDo, ...listDone];
    // Mettre à jour le state (list) avec la copie ----
    return setList(newListUpdated);
  };

  // Render ----------------------------------------
  return (
    <main className="container">
      {/* Afficher un texte indiquant que la liste est vide */}
      <section>
        {/* <h2>Mes tâches</h2> */}
        {list.length > 0 ? (
          <div className={styles["search-and-list"]}>
            {/* La searchbar */}
            <Input
              type="search"
              placeholder="Search a task"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            {/* La liste des tâches */}
            <ul className={styles.tasks}>{listTasks}</ul>
          </div>
        ) : (
          <div className={styles.empty}>
            <img src={illuEmpty} alt="Illustrations" />
            <p>... No tasks</p>
          </div>
        )}
        <div className={styles["part-add"]}>
          <Input
            type="text"
            placeholder="New task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <button onClick={handleAddTask}>
            <FontAwesomeIcon icon="plus" />
            Add task
          </button>
        </div>
      </section>
    </main>
  );
}
