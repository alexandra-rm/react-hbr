import React from "react";

function ContactCard({contact: {imgUrl, name, phone, email}}) {
    return (
        <div className="contact-card">
            <img align="center" src={imgUrl}/>
            <h3><font color="#3AC1EF">▍{name}</font></h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default ContactCard;
