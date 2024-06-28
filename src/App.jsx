import { Form } from "./components/form";
import { Card } from "./components/card";
import React from "react";

function App() {
  const [data, setData] = React.useState([]);

  return (
    <div className="App pt-[20px]pb-[20px] pl-[20px] border-double border-4 border-sky-500">
      {" "}
      <Form setData={setData} />
      {data.map((item) => {
        return <Card setData={setData} key={item.id} {...item} />;
      })}
    </div>
  );
}

export default App;
