import React, { useState, useEffect } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

const withDelayMount = loaderSize => WrappedComponent => {
  return props => {
    console.log(props);
    const { wait } = props;
    const [componentMount, setComponentMount] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setComponentMount(true);
      }, `${wait}000`);

      return () => clearTimeout(timer);
    }, [wait]);

    if (componentMount) {
      return <WrappedComponent {...props} />;
    } else {
      return (
        <div>
          <CircularProgress size={loaderSize} />
        </div>
      );
    }
  };
};

export default withDelayMount;
