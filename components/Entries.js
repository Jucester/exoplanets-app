import React from "react";
import { Entry } from "./Entry";

const Entries = (props) => {
  return (
    <div>
      <div className="row">
        {props.planets.map((cont) => {
          return <Entry cont={cont} />;
        })}
      </div>
    </div>
  );
};

export default Entries;
