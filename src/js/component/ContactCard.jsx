//Pass props into for contact information
import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  return (
    <div className="card">
      <div className="card-body d-flex">
        <div className="pic">
          <img
            className="profile-img"
            src="https://i.pinimg.com/736x/10/60/1b/10601b04e8f9030db52c82c212193507.jpg"
            alt="Card image cap"
          />
        </div>
        <div className="content">
          <h5 className="card-text">
            <i className="fas fa-user"></i>
            {props.fullname}
          </h5>
          <p className="card-text">
            <i className="fas fa-map-marker-alt"></i> {props.address}
          </p>
          <p className="card-text">
            <i className="fas fa-phone"></i> {props.phone}
          </p>
          <p className="card-text">
            <i className="fas fa-envelope"></i> {props.email}
          </p>
        </div>
        <div className="editing ms-auto">
          {/* Edit button when clicked will navigate to edit-contact view with useparam containing the id*/}
          <Link to={`/edit-contact/${props.id}`}>
            <i className="fas fa-pencil btn"></i>
          </Link>
          <i
            onClick={() => {
              props.onDelete(props.id);
            }}
            className="fas fa-trash-alt btn"
          ></i>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
