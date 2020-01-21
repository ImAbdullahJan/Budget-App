import React from "react";
import { useInView } from "react-intersection-observer";

import { withStyles } from "@material-ui/core";

const styles = theme => ({});

function RecordsPage({ classes }) {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0
  });

  const [data, setData] = React.useState(
    [...new Array(50).keys()].map(i => "something" + i)
  );

  React.useEffect(() => {
    setTimeout(() => {
      if (inView) {
        setData(prevData => [
          ...prevData,
          ...[...new Array(50).keys()].map(i => "something" + i)
        ]);
      }
    }, 3000);
  }, [inView, setData]);

  return (
    <>
      <h1>Records Page</h1>
      {data.map((item, index, array) => {
        if (array.length === index + 1) {
          return (
            <div key={index} ref={ref}>
              {item} - last
            </div>
          );
        }

        return <div key={index}>{item}</div>;
      })}
    </>
  );
}

export default withStyles(styles)(RecordsPage);
