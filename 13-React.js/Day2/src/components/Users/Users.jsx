import { useState } from "react"

function Users() {
    const [users, setUsers] = useState([
        {name: 'Alaa', email: 'alaa@info.com', isActive: true},
        {name: 'Nada', email: 'nada@info.com', isActive: false},
        {name: 'Hala', email: 'hala@info.com', isActive: true},
        {name: 'Eman', email: 'eman@info.com', isActive: false},
    ]);

    const [isAvailable, setIsAvailable] = useState(true);

    function handleToggle(){
        setIsAvailable(!isAvailable);
    }
    return (
      <div>
        {isAvailable && (
          <ul>
            {users.map((user, index) => (
                 {/*if(user.isActive){
                    return <li key={index}>{user.name}</li>
                 }*/}
            ))}
          </ul>
        )}
        <button className="btn btn-primary" onClick={() => {handleToggle()}}>Toggle</button>
      </div>
    );
}

export default Users
