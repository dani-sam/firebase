import { useState,useEffect } from 'react';
import './App.css';
import {db} from './firebase/config';
import {collection,getDocs,addDoc,doc,deleteDoc,updateDoc} from 'firebase/firestore'


function App() {
 
const [newName,setNewName]=useState('')
const [newType,setNewType]=useState('')
const [newPrice,setNewPrice]=useState(0)

  
const [users, setUsers] = useState([])
const ref=collection(db, "products") 
  
const createProduct=async () =>{
await addDoc(ref,{name:newName,type:newType,price:newPrice})
}

const updatePrice=async(id,price)=>{
  const userDoc=doc(db,"products",id)
  const newFields={price:Number(price)+100}
  await updateDoc(userDoc,newFields)
}

const deleteProducts=async(id)=>{
  const userDoc=doc(db,"products",id);
  await deleteDoc(userDoc)
}

useEffect(() => {
  
  const getUsers=async()=>{
    const data=await getDocs(ref)
    console.log(data);
    setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  }
  
    getUsers()
}, [])
  return (
    <div className="App">
      <input type="name" placeholder='Name...' 
      onChange={(event)=>{setNewName(event.target.value)
      }}
      />
      <input type="name" placeholder='Type' 
      onChange={(event)=>{setNewType(event.target.value)
      }}
      />
      <input type="number" placeholder='Price'
      onChange={(event)=>{setNewPrice(event.target.value)
      }}
      />

      <button onClick={createProduct}>Create Products</button>
      {users.map((user)=>{
      return(
        <div>
          {' '}
          <h3>Name:{user.name}</h3>
          <h3>Type:{user.type}</h3>
          <h3>Price:{user.price}</h3>
          <button onClick={()=>{updatePrice(user.id,user.price)}}>Update Price</button>
          <button onClick={()=>{deleteProducts(user.id)}}>delete Products</button>
        </div>
       
      )
      
    })}
    
    </div>
  );
}

export default App;
