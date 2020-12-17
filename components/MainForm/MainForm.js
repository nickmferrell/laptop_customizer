import React from "react";
import Specs from "../Specs/Specs";
import Parts from "../Parts/Parts";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

export default function MainForm(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = props.features[feature].map((item) => {
      const { USCurrencyFormat } = props;
      const itemHash = slugify(JSON.stringify(item));
      const selected = Object.assign({}, props.selected);

      return (
        <Specs
          itemHash={itemHash}
          USCurrencyFormat={USCurrencyFormat}
          item={item}
          feature={feature}
          selected={selected}
          updateFeature={props.updateFeature}
        />
      );
    });

    return (
      <Parts featureHash={featureHash} feature={feature} options={options} />
    );
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}
