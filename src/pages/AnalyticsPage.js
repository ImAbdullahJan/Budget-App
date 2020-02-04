import React from "react";

import withDelayMount from "../HOC/withDelayMount";
import withAccountsData from "../HOC/withAccountsData";

const SimpleComponent = props => (
  <div>
    Component load
    {props.wait || props.wait === 0 ? ` after ${props.wait}s` : " Immediately"}
    {props.accounts && ` ${props.accounts.map(item => item.name)}`}
  </div>
);

const EnhancedComponent = withDelayMount(30)(SimpleComponent);
const EnhancedComponentwithData = withAccountsData(
  withDelayMount(50)(SimpleComponent)
);

function AnalyticsPage({ classes }) {
  return (
    <>
      <h1>Analytics Page</h1>
      <SimpleComponent />
      <EnhancedComponent wait={0} />
      {[...new Array(7).keys()].map(item => (
        <EnhancedComponent key={item} wait={item + 1} />
      ))}
      <EnhancedComponentwithData wait={3} />
    </>
  );
}

export default AnalyticsPage;
