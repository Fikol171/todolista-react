import "./styled.css";

const TasksList = ({ tasks, removeTask, toggleTaskDone }) => {
  return (
    <ul>
      {tasks.map(({ id, content, done }) => (
        <li key={id}>
          <button onClick={() => removeTask(id)}>🗑</button>
          <span className={`${done ? "toggleItem" : ""}`}>
            {" "}
            {content} {id}{" "}
          </span>
          <button onClick={() => toggleTaskDone(id)}>Mark task as done</button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
