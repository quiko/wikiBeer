import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, initialValue) => {
  const [Data, setData] = useState(initialValue);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, []);

  return { Data, setData };
};
