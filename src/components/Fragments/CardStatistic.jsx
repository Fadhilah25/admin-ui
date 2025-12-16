import React from "react";
import Card from "../Elements/Card";
import BarsDataset from "../Elements/BarsDataset";

function CardStatistic(props) {
  const { data } = props;

  return (
    <>
      <Card title="Statistics" desc={<BarsDataset dataset={data} />} />
    </>
  );
}

export default CardStatistic;
