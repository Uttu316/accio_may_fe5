import Footer from "./components/footer";
import Header from "./components/header";
import "./App.css";
import UsersList from "./components/UserList";
import Counter from "./components/Counter";
import TodoList from "./components/todolist";

function App() {
  return (
    <div className="page_container">
      <Header />
      <h1>Hello Welcome to react</h1>
      <UsersList />
      <Counter />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
