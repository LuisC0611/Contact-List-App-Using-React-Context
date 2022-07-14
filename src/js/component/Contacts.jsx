import React, { useContext } from "react";
import ContactCard from "./ContactCard.jsx";
import { Context } from "../store/appContext";

const Contacts = () => {
  //Context to access store
  const { store, actions } = useContext(Context);
  const contact = store.contacts;

  //Pass id of selected contact and execute delete command
  function deleteContact(id) {
    actions.deleteContact(id);
  }

  //Create a contact card for every object recieved from store
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
