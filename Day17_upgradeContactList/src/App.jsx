import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useReducer, useRef, useCallback, createContext, useMemo } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "REMOVE":
      return state.filter((value) => value.id !== action.targetId);
    default:
      return state;
  }
}

export const contactStateContext = createContext();
export const contactDispatchContext = createContext();

function App() {
  const [contents, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = useCallback((name, contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name,
        contact,
      },
    });
  }, []);
  const onRemove = useCallback((targetId) => {
    dispatch({
      type: "REMOVE",
      targetId: targetId,
    });
  }, []);
  const memorizedContactDispatch = useMemo(() => {
    return { onRemove, onCreate };
  }, []);
  return (
    <div className="App">
      <h2>Contact List</h2>
      <contactStateContext.Provider value={contents}>
        <contactDispatchContext.Provider value={memorizedContactDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </contactDispatchContext.Provider>
      </contactStateContext.Provider>
    </div>
  );
}

export default App;
