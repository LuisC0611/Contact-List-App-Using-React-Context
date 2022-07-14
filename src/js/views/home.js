import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Contacts from "../component/Contacts.jsx";

//Display the list of contacts

export const Home = () => (
  <div>
    <Link to="/contact">
      <button className="btn btn-primary">Add New Contact</button>
    </Link>
    {/* Render information from Contacts component */}
    <Contacts />
  </div>
);
