import { useState } from "react";
import Task from "./Task";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Content.module.css";
import illuEmpty from "../assets/img/empty.svg";
import Tasks from "./Tasks";

export default function Content() {
  // STATES ----------------------------------------
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");

  // GESTIONNAIRES --------------------------------------
  // CRUD ----------
  const handleGenericTask = (reqName, id) => {
    // Création d'une copie de la liste
    const newList = [...list];

    // Ajouter une tâche --------------
    if (reqName === "create") {
      // Le champs est rempli, on insère la tâche dans la liste
      if (task) {
        // Création d'un id unique
        const newId = Date.now();
        // Insertion de la tâche dans la nouvelle liste
        newList.push({ id: newId, nameTask: task, done: false });
        // Mise à jour des states
        setList(newList);
        return setTask("");
      }
    }

    // Supprimer la tâche-----------------------------
    if (reqName === "delete") {
      // Retirer la tâche dont l'id est renseigné en argument
      const newListUpdated = newList.filter((task) => task.id !== id);
      // Mise à jour du state
      return setList(newListUpdated);
    }
    // ----------------------------------------------------

    // Modifier le status de la tâche ------------------------
    if (reqName === "put") {
      // Parcourir la nouvelle liste
      newList.map((task) => {
        // Mettre la tâche à true
        if (task.id === id) {
          task.done = !task.done;
        }
      });
      // Mettre à jour le state (list) avec la copie ----
      return setList(newList);
    }
  };
  // ----------------------------------

  // AFFICHER les listes et la gestion de la serach bar -----

  const filterDone = list.filter((task) => {
    return task.done === true;
  });

  const filterToDo = list.filter((task) => {
    return task.done !== true;
  });

  const displayList = (list) => {
    return list
      .filter((task) => task.nameTask.includes(search))
      .map((task) => (
        <Task
          key={task.id}
          keyTask={task.id}
          name={task.nameTask}
          id={task.nameTask}
          onClick={handleGenericTask}
          done={task.done}
        />
      ));
  };

  // console.log(list);

  // Render ----------------------------------------
  return (
    <main className="container">
      {/* Afficher un texte indiquant que la liste est vide */}
      <section>
        {/* <h2>Mes tâches</h2> */}
        {list.length > 0 ? (
          <div className={styles["search-and-list"]}>
            {/* La searchbar */}
            <div className={styles.searchBar}>
              <FontAwesomeIcon icon={"magnifying-glass"} />
              <Input
                type="search"
                placeholder="Search a task"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
            <Tasks subtitle="Tasks to do" numberTasks={filterToDo.length}>
              {displayList(filterToDo)}
            </Tasks>
            <Tasks subtitle="Tasks done" numberTasks={filterDone.length}>
              {displayList(filterDone)}
            </Tasks>
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
            onKeyDown={(event) =>
              event.key === "Enter" && handleGenericTask("create")
            }
          />

          <button onClick={() => handleGenericTask("create")}>
            <FontAwesomeIcon icon="plus" />
            Add task
          </button>
        </div>
      </section>
    </main>
  );
}
