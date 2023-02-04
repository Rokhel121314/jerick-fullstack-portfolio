import React, { useEffect, useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";

function Preloader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div className="loader">
      <BounceLoader
        color={"#FFFFFF"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Preloader;
