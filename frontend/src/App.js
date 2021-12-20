import Nav from "./Nav";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div className="App font-sans bg-gradient-to-r from-slate-700 to-slate-800 bg-center bg-cover h-screen flex">
      <Nav />
      <Dashboard />
    </div>
  );
};

export default App;
