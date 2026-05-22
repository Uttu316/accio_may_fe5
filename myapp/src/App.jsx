import Footer from "./components/footer";
import Header from "./components/header";
import "./App.css";

function App() {
  let fname = "Sujata";
  let lname = "Gupta";
  const getMyAge = () => {
    return 4 + 20;
  };
  return (
    <div className="page_container">
      <Header />
      <h1>Hello Welcome to react</h1>
      {fname + " " + lname}
      <p>{2 + 2}</p>
      <h3>Age:{getMyAge()}</h3>
      {6}
      <Footer />
    </div>
  );
}

export default App;
