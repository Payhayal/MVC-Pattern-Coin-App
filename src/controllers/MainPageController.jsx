import { useEffect, useState } from "react";
import MainPageView from "../views/MainPageView";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

axios.defaults.baseURL = "https://api.coincap.io/v2/assets";

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [params, setParams] = useSearchParams();

  const page = params.get("page");
  useEffect(() => {
    // getting data of the relevant page
    axios
      .get(`/?limit=15&offset=${page}`)
      .then((res) => setCoins([...coins, ...res.data.data]));
  }, [params]);

  useEffect(() => {
    // if there is no page parameter in the url, load the 1st page
    if (page != 1) {
      setParams({ page: "1" });
      return;
    }
  }, []);

  return <MainPageView coins={coins} />;
};

export default MainPageController;
