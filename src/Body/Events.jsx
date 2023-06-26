import { useEffect, useState } from "react";
import { getEvents } from "../services/apiServise";
import ErrorModal from "../ErrorModal";
import { useParams } from "react-router-dom";
import Datalist from "./DataList";
import {  useSelector } from "react-redux";

function Events({ setInfo, info }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);
 
  const [dataList ,setDataList] = useState(null);
  const searchData = useSelector((state)=> state.searchData);
  const { keyword } = useParams();

  useEffect(() => {
    getEvents({
      ...searchData,
      resultType: "events",
      eventsPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ events, info }) => {
        events &&
          setDataList(events.results);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => setErrorMessage(error.toString()));
      
  }, [setDataList, setInfo, page, keyword, searchData]);

  return (
    <>
      <Datalist info={info} dataList={dataList} page={page} setPage={setPage} />

      <ErrorModal
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
    </>
  );
}

export default Events;
