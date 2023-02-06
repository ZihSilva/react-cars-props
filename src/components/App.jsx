import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contacts) {
  return (
    <Card
      id={contacts.id}
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      email={contacts.phone}
      phone={contacts.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
