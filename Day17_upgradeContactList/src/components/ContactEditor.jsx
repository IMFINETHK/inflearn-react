import "./ContactEditor.css";
import { useState, useRef, memo, useContext } from "react";
import { contactDispatchContext } from "../App";

function ContactEditor() {
  const { onCreate } = useContext(contactDispatchContext);
  const nameRef = useRef();
  const contactRef = useRef();
  const [state, setState] = useState({
    name: "",
    contact: "",
  });
  const onChangeValue = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    if (state.name === "") {
      alert("이름을 입력해 주세요");
      nameRef.current.focus();
      return;
    } else if (state.contact === "") {
      alert("연락처(이메일)를 입력해 주세요");
      contactRef.current.focus();
      return;
    }
    onCreate(state.name, state.contact);
    setState({ name: "", contact: "" });
  };
  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          ref={nameRef}
          name="name"
          value={state.name}
          onChange={onChangeValue}
          className="name"
          placeholder="이름 ..."
        />
        <input
          ref={contactRef}
          name="contact"
          value={state.contact}
          onChange={onChangeValue}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}

export default memo(ContactEditor);
