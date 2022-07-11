import React, { useState, useEffect, useContext } from "react";
import ContactCard from "./ContactCard.jsx";
import { Context } from "../store/appContext";

const Contacts = () => {
  const { store, actions } = useContext(Context);

  const contact = store.contacts;

  function deleteContact(id) {
    actions.deleteContact(id);
  }

  return contact.map((items) => {
    return (
      <ContactCard
        key={items.id}
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
