import React, { useState } from "react";

const List = () => {
  const [inputElementsToAdd, setElementsToAdd] = useState(1);
  const [commitedElementsToAdd, setCommitedElementsToAdd] = useState(0);

  const Image = () => (
    <>
    <img
          src={"https://miro.medium.com/max/220/1*C351fbWRMQTvLkCbZtuEHw.png"}
          alt="stone-component"
        />
    </>
  )

  const ListComp = ({ id }) => (
    <>
      <ul>
        <li index>Hello n {id}</li>
      </ul>
    </>
  );

  return (
    <div>
      <label htmlFor="">N Elements to add</label>
      <input
        type="number"
        name=""
        id=""
        value={inputElementsToAdd}
        onChange={(e) => {
          setElementsToAdd(parseInt(e.currentTarget.value, 10));
        }}
      />
      <button
        onClick={() => {
          setCommitedElementsToAdd(inputElementsToAdd);
        }}
      >
        Add elements
      </button>
      {[...Array(commitedElementsToAdd)].map(() => (
        <Image />
      ))}
    </div>
  );
};

export default List;
