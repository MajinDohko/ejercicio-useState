import './App.css'
import { useState } from 'react'
// import ReactDom from 'react-dom/client';

function App() {
 //Aquí tu código
  const [name, setName] = useState('Sofia')
  const [newName, setNewName] = useState('')

    const changeName =() => {
        event.preventDefault();
        if (newName!== "") {
          setName(newName);
          setNewName("");
        }
    }
    return (
        <div>
            <h2>Teacher Name: {name}</h2>
            <form onSubmit={changeName}>
        <input
          type="text"
          value={newName}
          onChange={(name) => setNewName(name.target.value)}
          placeholder="add a name"
        />
        <button type="submit">Add</button>
      </form>
        </div>
    )
}

//   return (
//     <div>
//         <h2>Teacher Name: {name}</h2>
//         <ul>
//             <li onClick={()=>setName("Data")}>Data</li>
//             <li onClick={()=>setName("Reyes")}>Reyes</li>
//             <li onClick={()=>setName("Yolanda")}>Yolanda</li>
//         </ul>
//     </div>
//   )
// }

export default App;

