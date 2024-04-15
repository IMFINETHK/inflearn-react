import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { contactStateContext } from "../App";

export default function ContactList() {
  const contents = useContext(contactStateContext);
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contents.map((value) => (
        <ContactItem key={value.id} {...value} />
      ))}
    </div>
  );
}
