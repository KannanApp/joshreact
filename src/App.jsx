import {useState} from "react";
import './App.css';
import BlogList from "./Dashboard/BlogList";

const sampleData = [
  {id: 1, type: "One"},
  {id: 2, type: "Two"},
  {id: 3, type: "Three"},
  {id: 4, type: "Four"},
  {id: 5, type: "Five"},
];
function App() {
  const [data, setData] = useState(sampleData);
  const handleDelete = (idx) => {
    const res = data.filter((item)=> item?.id !== idx);
    setData(res);
  }
  return (
    <div className="App">
      <h1 className="header">Todo List</h1>
      <BlogList blogs={data} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
