import "./ContactItem.css";
import { memo, useContext } from "react";
import { contactDispatchContext } from "../App";

function ContactItem({ id, name, contact }) {
  const { onRemove } = useContext(contactDispatchContext);
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => onRemove(id)}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
