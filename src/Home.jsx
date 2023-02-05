import { useState } from "react";

const Home = () => {
  
  const [users, setUsers] = useState([
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "phone": "493-170-9623 x156",
      "website": "kale.biz"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "phone": "(254)954-1289",
      "website": "demarco.info"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "phone": "1-477-935-8478 x6{25",
      "website": "ola.org"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "phone": "210.067.6132",
      "website": "elvis.io"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "phone": "024-648-3804",
      "website": "ambrose.net"
    }
  ]); 

  const [edit, setEdit] = useState(-1)
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')
  
  const [add, setAdd] = useState(false)

  function editSave(id, value1, value2, value3, value4, value5, e) {
    e.preventDefault()
    const changes = users.map(item => {
      if(item.id === id) {
        item.id = id;
        item.name = value1;
        item.username = value2;
        item.email = value3;
        item.phone = value4;
        item.website = value5
      }
      return item}
    )
    setUsers(changes)
    setAdd(false)
  }

  const addUser = (value1, value2, value3, value4, value5, e)=>{
    e.preventDefault()
    if(!value1.trim() || !value2.trim() || !value3.trim()) return;
    const newUser = {
      id: Date.now(),
      name: value1,
      username: value2,
      email: value3,
      phone: value4,
      website: value5
    };
    setUsers( [...users, newUser] );
    setAdd(!add)
  }

  const removeUser = id => {
    const newUsers = users.filter( user => user.id !== id);
    setUsers(newUsers);
  }

  function empty() {
    setValue1("")
    setValue2("")
    setValue3("")
    setValue4("")
    setValue5("")
    setAdd(!add)
  }

  return (
    <div className='App'>

      {add ?<> <form action="">

        <label>Name</label>
        <input maxLength={25} type="text" value={value1} onChange={(e) => {setValue1(e.target.value)}} />

        <label>Username</label>
        <input maxLength={25} type="text" value={value2} onChange={(e) => {setValue2(e.target.value)}} />

        <label>Email</label>
        <input maxLength={25} type="text" value={value3} onChange={(e) => {setValue3(e.target.value)}} />

        <label>Phone</label>
        <input maxLength={25} type="text" value={value4} onChange={(e) => {setValue4(e.target.value)}} />

        <label>Website</label>
        <input maxLength={25} type="text" value={value5} onChange={(e) => {setValue5(e.target.value)}} />

        <div className="form_div">
          <button onClick={(e) => {addUser(value1, value2, value3, value4, value5, e)}}>Add On</button>
          <button onClick={() => setAdd(!add)}>Cancle</button>
        </div>

      </form> </>
      :
      <><button className='add' onClick={()=> empty()}>Add New User</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        {
          users.map( (user, index)=>   
          <tbody key={index}>
          {edit === user.id ? 
            <tr>
              <td>{index+1}</td>
              <td>
                <input maxLength={25} type="text" value={value1} onChange={(e) => {setValue1(e.target.value)}} /> 
              </td>
              <td> 
                <input maxLength={25} type="text" value={value2} onChange={(e) => {setValue2(e.target.value)}} /> 
              </td>
              <td>
                <input maxLength={25} type="text" value={value3} onChange={(e) => {setValue3(e.target.value)}} /> 
              </td>
              <td>
                <input maxLength={25} type="text" value={value4} onChange={(e) => {setValue4(e.target.value)}} /> 
              </td>
              <td>
                <input maxLength={25} type="text" value={value5} onChange={(e) => {setValue5(e.target.value)}} /> 
              </td>
              <td className="actions">
                <button className="components yes" onClick={(e) => {editSave(user.id, value1, value2, value3, value4, value5, e); setEdit(-1)}}><span className="material-symbols-outlined">done_outline</span></button>
                <button className="components del" onClick={() => setEdit(-1)}><span className="material-symbols-outlined">close</span></button>
              </td>
            </tr>
              :
            <tr key={index}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td className="actions">
                <button className='components' onClick={()=>{
                  setEdit(user.id);
                  setValue1(user.name);
                  setValue2(user.username);
                  setValue3(user.email);
                  setValue4(user.phone);
                  setValue5(user.website);
                }}><span className="material-symbols-outlined">edit</span></button>
                <button className='components del' onClick={()=> removeUser( user.id ) }>
                <span className="material-symbols-outlined">delete</span></button>  
              </td>
            </tr>
          }
        </tbody>
          )
        }
      </table></>
      }
    </div>
  )
}

export default Home


