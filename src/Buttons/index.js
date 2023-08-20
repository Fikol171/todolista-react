const Buttons = ({ tasks, toggleAllDone, hideDoneTasks, hideDone }) => {
  if (tasks.length) {
    return (
      <>
        <button onClick={hideDoneTasks}>
          {hideDone ? "Show" : "Hide"} all done tasks
        </button>
        <button
          disabled={tasks.every((task) => task.done)}
          onClick={toggleAllDone}
        >
          Set all task done
        </button>
      </>
    );
  }
};
export default Buttons;
