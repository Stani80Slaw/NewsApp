import { useEffect, useState } from "react";
import { getEvents } from "../services/apiServise";
import { useParams } from "react-router-dom";
import Datalist from "./DataList";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from "../services/stateServise";

function Events({ setInfo, info }) {
  const [page, setPage] = useState(1);
  const [dataList, setDataList] = useState([]);
  const searchData = useSelector((state) => state.searchData);
  const { keyword } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getEvents({
      ...searchData,
      resultType: "events",
      eventsPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ events, info }) => {
        events && 
        setDataList((prevDataList) =>   [...prevDataList, ...events.results]);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => dispatch(setErrorMessage(error.toString())));
  }, [setDataList, setInfo, page, keyword, searchData, dispatch]);

  return (
    <Datalist info={info} dataList={dataList} page={page} setPage={setPage} />
  );
}

export default Events;
