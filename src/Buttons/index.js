const Buttons = ({ tasks, toggleAllDone }) => {
  if (tasks.length) {
    return (
      <>
        <button>Hide all done tasks</button>
        <button onClick={toggleAllDone}>Set all task done</button>
      </>
    );
  }
};
export default Buttons;
