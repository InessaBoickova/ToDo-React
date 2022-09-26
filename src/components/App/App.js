import TaskAddForm from "../TaskAddForm/TaskAddForm";
import ClearButton from "../ClearButton/ClearButton";

function App() {
  return (
    <div className="App">
          <header className="App_header">
              <h1>Your to-do list</h1>
          </header>
          
          <section className="checklist">
              <TaskAddForm/>
              <div className="checklist_task"></div>
              <ClearButton/>
        </section> 
      <footer className="App_footer">
        <h2>Not everyone can truly succeed in everything. But success only comes with self-management and determination</h2>
      </footer> 
    </div>
  );
}

export default App;
