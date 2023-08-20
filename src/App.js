import { useState } from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import TasksList from "./Tasks";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { content: "Zrobic sniadanie", done: true, id: 1 },
    { content: "Nauczyc sie reduxa", done: false, id: 2 },
  ]);

  const hideDoneTasks = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

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

  const toggleAllDone = () => {
    setTasks(tasks.map((task) => ({ ...task, done: true })));
  };

  return (
    <>
      <Header title="To do list " />
      <Section body={<Form addnewTask={addnewTask} />} />
      <Section
        title="Tasks list"
        body={
          <TasksList
            tasks={tasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
            hideDone={hideDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            toggleAllDone={toggleAllDone}
            hideDoneTasks={hideDoneTasks}
            hideDone={hideDone}
          />
        }
      />
    </>
  );
}

export default App;
