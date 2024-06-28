import React from "react";
import { Form } from "../form/form";

export const Card = ({ name, id, setData }) => {
  const [show, setShow] = React.useState(false);
  const deleteItem = () => {
    setData((data) => {
      return data.filter((item) => item.id != id);
    });
  };
  const editItem = () => {
    setShow(!show);
  };
  const editedItem = (newValue) => {
    setData((data) => {
      return data.map((item) =>
        item.id === id ? { name: newValue, id } : item
      );
    });

    setShow(false);
  };
  return (
    <div>
      {show ? (
        <div style={{ marginTop: "32px", marginBottom: "32px" }}>
          <Form editedItem={editedItem} defaultValue={name} />
        </div>
      ) : (
        <h1 className="">{name}</h1>
      )}
      <button
        className="button bg-fuchsia-400 hover:bg-fuchsia-900 px-[10px] py-[5px]"
        onClick={deleteItem}
      >
        delete
      </button>
      <button
        className="button bg-sky-800 hover:bg-green-400  px-[10px] py-[5px] ml-[10px]"
        onClick={editItem}
      >
        edit
      </button>
    </div>
  );
};
