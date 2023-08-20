import { useState } from "react";

const Form = ({ addnewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addnewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="enter task"
      />
      <button>Add task</button>
    </form>
  );
};

export default Form;
