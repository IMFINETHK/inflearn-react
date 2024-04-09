import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ contents, onRemove }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contents.map((value) => (
        <ContactItem key={value.id} {...value} onRemove={onRemove} />
      ))}
    </div>
  );
}
