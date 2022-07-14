//Form to input contact information
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { inputValues } from "../inputs.js";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/addcontacts.css";

export const EditContact = () => {
  const { store, actions } = useContext(Context);

  //grab param from weblink
  let { id } = useParams();

  const getContact = store.contacts;
  //Filter contact and only get object containing id
  const editContact = getContact.filter((contact, index) => {
    return contact.id === id;
  })[0];

  //Populate fields with contact details
  const [textEntered, setTextEntered] = useState({
    full_name: editContact.full_name,
    address: editContact.address,
    phone: editContact.phone,
    email: editContact.email,
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
    actions.editContact(textEntered, id);
    setTextEntered({
      full_name: "",
      address: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="input-body">
      <h1>Edit Contact</h1>
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
