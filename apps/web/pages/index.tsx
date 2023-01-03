import { Button } from "ui";
import * as React from "react";

export default function Web() {
  const [bool, setBool] = React.useState(false);

  return (
    <div>
      <h1>Web</h1>
      <p>{bool ? "on" : "off"}</p>
      <Button type="button" onClick={() => setBool(!bool)}>
        toggle
      </Button>
    </div>
  );
}
