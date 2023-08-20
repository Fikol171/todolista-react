const Buttons = ({ tasks }) => {
  if (tasks.length) {
    return (
      <>
        <button>Hide all done tasks</button>
        <button>Set all task done</button>
      </>
    );
  }
};
export default Buttons;
