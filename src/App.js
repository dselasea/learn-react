import './App.css';

function App() {

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave']
    const int = Math.floor(Math.random() * 3)
    return names[int]
  }

  return (
    <div className="App">
      <h1>Hello {handleNameChange()}!</h1>
    </div>
  );
}

export default App;
