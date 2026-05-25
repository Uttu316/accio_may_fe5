import Footer from "./components/footer";
import Header from "./components/header";
import "./App.css";
import UsersList from "./components/UserList";

function App() {
  return (
    <div className="page_container">
      <Header />
      <h1>Hello Welcome to react</h1>
      <UsersList />
      <Footer />
    </div>
  );
}

export default App;
