import { use } from "i18next";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const TT = () => {
  const [hasMore, setHasMore] = useState(true);
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [page, setPage] = useState(1);
  const fetchMore = () => {
    setTimeout(() => {
      setDataSource(dataSource.concat(Array.from({ length: 20 })));
    }, 500);
  };
  useEffect(() => {
    setDataSource([]);
    setPage(1);
  }, [dataSource]);
  return (
    <div className="App">
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMore}
        hasMore={true}
        loader={<p>loading ...</p>}
      >
        {dataSource.map((item, index) => {
          return <div key={index}> div #{index} </div>;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default TT;
