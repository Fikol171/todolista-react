import "./styled.css";

const TasksList = ({ tasks, removeTask, toggleTaskDone, hideDone }) => {
  return (
    <ul className="decorationStyle">
      {tasks.map(({ id, content, done }) => (
        <li className={`item ${hideDone && done ? "hideAll" : ""}`} key={id}>
          <button className="buttons" onClick={() => removeTask(id)}>
            🗑
          </button>
          <span className={`${done ? "toggleItem" : ""}`}>
            {" "}
            {content} {id}{" "}
          </span>
          <button className="buttons" onClick={() => toggleTaskDone(id)}>
            {done ? "✔" : ""}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
