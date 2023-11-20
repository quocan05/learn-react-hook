import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    try {
      let fetchData = async () => {
        let response = await axios.get(url);
        let dataResponse = response && response.data ? response.data : [];
        let filteredData = dataResponse.filter((item) => item.id < 10);
        setData(filteredData);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, isError };
};

export default useFetch;
