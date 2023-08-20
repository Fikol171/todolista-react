import { useState } from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import TasksList from "./Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { content: "Zrobic sniadanie", done: true, id: 1 },
    { content: "Nauczyc sie reduxa", done: false, id: 2 },
  ]);

  const addnewTask = (content) => {
    setTasks([
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return (
    <>
      <Header title="To do list " />
      <Section body={<Form addnewTask={addnewTask} />} />
      <Section
        title="Tasks list"
        body={<TasksList tasks={tasks} />}
        extraHeaderContent={<Buttons tasks={tasks} />}
      />
    </>
  );
}

export default App;
