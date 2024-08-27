import { Header } from "./Component/Header"
import { CreateTodoForm } from "./Component/CreateTodoForm";
import { TodoList } from "./Component/TodoList";

function App() {


  return (
		<>
			<Header />
      <CreateTodoForm />
      <TodoList/>
		</>
	);
}

export default App
