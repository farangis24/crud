import React from "react";

export const Form = ({ setData, defaultValue, editedItem }) => {
  const [userName, setUserName] = React.useState(
    defaultValue ? defaultValue : ""
  );
  const submit = (e) => {
    e.preventDefault();
    if (defaultValue) {
      editedItem(userName);

      return;
    }
    setData((state) => {
      return [...state, { name: userName, id: Date.now() }];
    });
    setUserName("");
  };
  return (
    <form onSubmit={submit}>
      <input
        className="input bg-violet-200 "
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        type="text"
        name="userName"
      />
      <button
        className="button bg-sky-500 hover:bg-sky-300 ml-[5px]  px-[10px]"
        type="submit"
      >
        {defaultValue ? "edit" : "send"}
      </button>
    </form>
  );
};
