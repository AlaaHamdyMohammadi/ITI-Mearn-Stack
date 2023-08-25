import React, { useEffect } from "react";
import { useState } from "react";
import './Navbar.css'


function Link({children}){
    return <a href="{children.href}" className="style">{children}</a>
}

function Navbar() {
    // const name = 'Alaa';
    // const title = 'programmig';
    const [name,setName] = useState('Alaa');
    const [title,setTitle] = useState('Developer');

    useEffect(function(){
        //initial render + rerender
        console.log('Mounting1');

        //unmounting
        return ()=> { //cleanUp method
            console.log('Unmounting');
        }
    },[])

    useEffect(function(){
        console.log('Name')
    },[name, title])

    function handleChange(){
        setName('Arwa');
        setTitle('Student');
    }

    const style = {color:"blue", fontSize: "20px"}

  return (
    <div>
      <h1 style={style}>
        {name} is a {title}
      </h1>
      <h2>Navbar</h2>

      <Link href="http://www.facebook.com">Home</Link>
      <Link>AboutUs</Link>
      <Link>ContactUs</Link>

      {/*<a className="style" href="#">
        Home
      </a>
      <a className="style" href="#">
        About us
      </a>
      <a className="style" href="#">
        Contact us
      </a>*/}
      <button onClick={handleChange}>Change Content</button>
    </div>
  );
}

export default Navbar;
