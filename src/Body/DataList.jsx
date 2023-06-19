import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import InfiniteScroll from "react-infinite-scroll-component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DataCard from "./DataCard";

function Datalist({ info, dataList, page, setPage }) {
  console.log("datalist", dataList);

  return (
    <>
      {info && <Alert variant="info">{info}</Alert>}
      {dataList?.length && (
        <InfiniteScroll
          dataLength={dataList?.length}
          next={() => setPage(page + 1)}
          hasMore
          scrollThreshold="100%"
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Row xs={1} md={2} lg={3} className="g-4">
            {dataList?.map((data, idx) => (
              <Col key={idx}>
                <DataCard data={data} />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      )}
    </>
  );
}

export default Datalist;
