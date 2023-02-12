import "./App.css";
import Board from "./components/Board";
import { BoardType } from "./utils/enums";

function App() {
  return (
    <div>
      <h1 className="text-3xl text-center p-3 text-white">Kanban Board</h1>
      <div className="px-3 flex gap-2">
        <Board type={BoardType.TO_DO}/>
        <Board type={BoardType.IN_PROGRESS}/>
        <Board type={BoardType.COMPLETED}/>
      </div>
    </div>
  );
}

export default App;
