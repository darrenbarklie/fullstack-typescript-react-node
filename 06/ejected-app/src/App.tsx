import "./App.css";
import DisplayText from "./DisplayText";

function App() {
  const getUserFullName = async (username: string): Promise<string> => {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (usersResponse.ok) {
      const users = await usersResponse.json();

      const userByName = users.find((usr: any) => {
        return usr.username.toLowerCase() === username;
      });
      return userByName.name;
    }

    return "";
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn React</h1>
        <DisplayText getUserFullName={getUserFullName} />
      </header>
    </div>
  );
}

export default App;
