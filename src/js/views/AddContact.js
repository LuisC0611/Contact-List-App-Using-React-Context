//Form to input contact information
//Contact updating is delayed and take 2 submits to appear...
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { inputValues } from "../inputs.js";
import { Context } from "../store/appContext";
import "../../styles/addcontacts.css";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [textEntered, setTextEntered] = useState({
    full_name: "",
    address: "",
    phone: "",
    email: "",
  });

  function inputValue(e) {
    const { name, value } = e.target;
    setTextEntered((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    actions.saveContact(textEntered);
    setTextEntered({
      full_name: "",
      address: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="input-body">
      <h1>Add a new contact</h1>
      <form onSubmit={handleSubmit}>
        {inputValues.map((item) => {
          return (
            <div key={item.value} className="contact-inputs">
              <h4>{item.placeholder}</h4>
              <input
                className="w-100"
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                onChange={inputValue}
                value={textEntered[item.name]}
              />
            </div>
          );
        })}
        <button className="btn btn-primary input-links">Save</button>
      </form>
      <Link to="/">
        <span className="input-links" href="#" role="button">
          Get back to contacts
        </span>
      </Link>
    </div>
  );
};
