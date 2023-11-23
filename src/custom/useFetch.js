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
        // console.log(response.data);
        let data = response && response.data ? response.data : [];
        let filterData = data.slice(0, 10);

        //console.log(filterData);
        setData(filterData);
        setIsLoading(false);
      };
      setTimeout(() => {
        fetchData();
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }, []);

  return { data, isLoading, isError };
};

export default useFetch;
