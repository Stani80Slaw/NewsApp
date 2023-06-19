import { useEffect, useState } from "react";
import { getEvents } from "../services/apiServise";
import ErrorModal from "../ErrorModal";
import { useParams } from "react-router-dom";
import Datalist from "./DataList";

function Events({ dataList, setDataList, setInfo, info }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);

  const { keyword } = useParams();

  useEffect(() => {
    getEvents({
      eventsPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ events, info }) => {
        events && setDataList([...(dataList || []), ...events.results]);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => setErrorMessage(error.toString()));
  }, [setDataList, setInfo, page, keyword]);

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
