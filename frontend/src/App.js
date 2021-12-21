import Nav from "./Nav";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div className="App font-sans bg-neutral-800 h-screen flex">
      <Nav />
      <Dashboard />
    </div>
  );
};

export default App;
