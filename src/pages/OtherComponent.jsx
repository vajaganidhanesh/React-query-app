import React from "react";
import { useQuery } from "react-query";

function OtherComponent() {
  const { data } = useQuery(["characters", 1]);

  console.log(data);
  return <div>OtherComponent</div>;
}

export default OtherComponent;
