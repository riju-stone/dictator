import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const history = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);

    count === 0 && history("/login");

    return () => clearInterval(interval);
  }, [count, history]);

  return <div>Loading...</div>;
};

export default Loader;
