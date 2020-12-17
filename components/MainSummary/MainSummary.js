import React from "react";

import Total from "../Total/Total";
import Option from "../Option/Option";

export default function MainSummary(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => (
    <Option feature={feature} idx={idx} {...props} />
  ));

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <Total {...props} />
    </section>
  );
}
