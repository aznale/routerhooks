import { useReducer } from "react";

function personOperations(state, action) {
  switch (action.type) {
    case "increment_age": {
      return {
        name: state.name,
        surname: state.surname,
        age: state.age + 1,
      };
    }
    case "decrement_age": {
      return {
        name: state.name,
        surname: state.surname,
        age: state.age - 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        surname: state.surname,
        age: state.age,
      };
    }
    case "changed_surname": {
      return {
        name: state.name,
        surname: action.nextSurname,
        age: state.age,
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialState = {
  name: "Taylor",
  surname: "Feels",
  age: 43,
};

export default function PersonProfile() {
  const [state, dispatch] = useReducer(personOperations, initialState);

  function handleButtonClickIncrement() {
    dispatch({
      type: "increment_age",
    });
  }

  function handleButtonClickDecrement() {
    dispatch({
      type: "decrement_age",
    });
  }

  function handleInputChangeName(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }

  function handleInputChangeSurname(e) {
    dispatch({
      type: "changed_surname",
      nextSurname: e.target.value,
    });
  }

  return (
    <>
      <h1>Person Profile Form</h1>
      <hr />
      <h3>Modify data</h3>
      <label>Name</label>
      <input value={state.name} onChange={handleInputChangeName} />
      <label>Surname</label>
      <input value={state.surname} onChange={handleInputChangeSurname} />
      <button onClick={handleButtonClickIncrement}>Increment age</button>
      <button onClick={handleButtonClickDecrement}>Decrement age</button>

      <h3>Person Profile</h3>
      <p>Name: {state.name}</p>
      <p>Surname: {state.surname}</p>
      <p>Age: {state.age}</p>
    </>
  );
}
