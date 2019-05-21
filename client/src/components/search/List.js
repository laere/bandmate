import React from "react";
import Card from "components/common/Card";

const List = props => {
  const { bands } = props.bands;

  const renderBands = bands.map(band => {
    return <Card key={band._id} band={band} />;
  });

  return <div className="bands-list">{renderBands}</div>;
};

export default List;
