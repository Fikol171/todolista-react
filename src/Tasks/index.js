const TasksList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.content} {task.id}
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
