import "./ContactItem.css";

export default function ContactItem({ id, name, contact, onRemove }) {
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => onRemove(id)}>🗑️ Remove</button>
    </div>
  );
}
