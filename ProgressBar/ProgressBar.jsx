import React from "react";
import styled from "styled-components";

const ProgressBar = ({ percent = 24 }) => {
  const cappedPercent = Math.min(Math.max(0, percent), 100);

  return (
    <OuterBar data-testid="wrapper">
      <InnerBar data-testid="progress" percent={cappedPercent} />
    </OuterBar>
  );
};
export default ProgressBar;
const OuterBar = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  background-color: lightgrey;
`;

const InnerBar = styled.div`
  height: 100%;
  border-radius: 5px;
  background-color: green;
  width: ${(props) => props.percent}%;
`;
