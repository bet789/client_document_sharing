import { useState } from "react";
import { Col, Row } from "antd";
import useSWR from "swr";
import axios from "axios";
import qs from "qs";
import ListNews from "../components/listNews";
import { api } from "../helpers/config";
import * as url from "../helpers/url_helper";
import ListPostCategory from "../components/listPostCategory";
import SkeletonPost from "../components/sekeletonPost";
import { getPostPaging } from "../helpers/helper";
const fetcher = (url) =>
  axios
    .get(url, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
    .then((res) => res);
export default function Home({ data }) {
  const [params, setParams] = useState({ pageIndex: 1, pageSize: 12 });

  const {
    data: dataNewest,
    error: errorNewest,
    isLoading: isLoadingdataNewest,
  } = useSWR(
    `${api.API_URL}${url.API_POST_GET_PAGING}?${qs.stringify(params)}`,
    fetcher
  );

  const {
    data: dataCategory,
    error: errorCategory,
    isLoading: isLoadingdataCategory,
  } = useSWR(`${api.API_URL}${url.API_CATEGORY_GET_ALL}`, fetcher);

  const showSkeleton = () => {
    var arrSkeleton = [];
    for (let i = 0; i < 6; i++) {
      arrSkeleton.push(<SkeletonPost key={i} />);
    }
    return arrSkeleton;
  };

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <div className="wrapper">
        <Row gutter={[16, 16]}>
          <Col span={24} className="center-center">
            {isLoadingdataNewest ? (
              showSkeleton()
            ) : (
              <ListNews
                title={"BÀI VIẾT MỚI CẬP NHẬT"}
                data={dataNewest?.data}
              />
            )}
          </Col>

          {/* List of articles by category level 0 */}
          {isLoadingdataCategory
            ? showSkeleton()
            : dataCategory?.map((item) => {
                if (item.level === 0)
                  return (
                    <>
                      <Col key={item.id} span={24}>
                        <ListPostCategory data={item} />
                      </Col>
                    </>
                  );
              })}
        </Row>
      </div>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  console.log("🚀 ~ file: index.js:84 ~ getServerSideProps ~ req:", req);
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=30"
  );
  // const _params = { pageIndex: 1, pageSize: 12 };
  // const data = await getPostPaging(_params);
  // console.log("🚀 ~ file: index.js:90 ~ getServerSideProps ~ data:", data);

  return {
    props: { data: {} },
  };
}
