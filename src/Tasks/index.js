const TasksList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map(({ id, content }) => (
        <li key={id}>
          <button onClick={() => removeTask(id)}>🗑</button>
          {content} {id}
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
