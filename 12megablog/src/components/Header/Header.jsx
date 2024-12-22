import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { use } from "react";

function Header() {
  const authstatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();     
  

  const navitems = [
    { name: "home", path: "/" , active : true},
    { name : "login" , path : "/login" , active : !authstatus}, 
    { name : "singup" , path : "/signup" , active : !authstatus},
    { name : "all posts" , path : "/all-posts" , active : authstatus},
    { name : "add post" , path : "/add-post" , active : authstatus},  
  ];

  return (
    <header className= 'py-3  shadow bg-gray-500'>  
    <Container>
      <nav className="flex">
        <div className=" mr-4">
        <link to='/'> <Logo  width = '70px'/> </link>
        </div>
        
        <ul className="flex ml-auto">
          {navitems.map((item) => 
             item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.path)}
                className="inline-block px-6 py-2  duration-200 hover:bg-blue-100
                rounded-full"
                >{item.name}</button>
              </li>
            ) : null
          )}
          {authstatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </Container>
    </header>
  )
}

export default Header;
