import React, { useState, useEffect, useContext } from "react";
import ContactCard from "./ContactCard.jsx";
import { Context } from "../store/appContext";
import { EditContact } from "../views/EditContact";

const Contacts = () => {
  const { store, actions } = useContext(Context);

  const contact = store.contacts;
  function deleteContact(id) {
    actions.deleteContact(id);
  }

  

  return contact.map((items, index) => {
    return (
      <ContactCard
        key={index}
        id={items.id}
        fullname={items.full_name}
        address={items.address}
        phone={items.phone}
        email={items.email}
        onDelete={deleteContact}
      />
    );
  });
};

export default Contacts;
