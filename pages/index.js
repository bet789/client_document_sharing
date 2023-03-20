import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import useSWR from "swr";
import { useRouter } from "next/router";
import axios from "axios";
import qs from "qs";
import ListNews from "../components/listNews";
import { api } from "../helpers/config";
import * as url from "../helpers/url_helper";
import ListPostCategory from "../components/listPostCategory";
import SkeletonPost from "../components/sekeletonPost";

import { getPostPaging, getAllCategory } from "../helpers/helper";
const fetcher = (url) =>
  axios
    .get(url, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
    .then((res) => res);
export default function Home({ data }) {
  const router = useRouter();
  const [dataNewest, setDataNewest] = useState([]);
  const [loadingDataNewest, setLoadingDataNewest] = useState(false);
  const [dataCategory, setDataCategory] = useState([]);
  const [loadingDataCategory, setLoadingDataCategory] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);
  const [loadingDataSearch, setLoadingDataSearch] = useState(false);

  const [params, setParams] = useState({ pageIndex: 1, pageSize: 12 });

  useEffect(() => {
    onGetPostNewest();
    onGetDataCategory();
  }, []);

  useEffect(() => {
    const _search = router.query.search;
    if (_search) {
      onGetPostPaging(_search);
    }
  }, [router.query]);

  const onGetPostPaging = async (title) => {
    setLoadingDataSearch(true);
    const res = await getPostPaging({ title: title });
    setDataSearch(res || []);
    setLoadingDataSearch(false);
  };

  const onGetPostNewest = async () => {
    setLoadingDataNewest(true);
    const res = await getPostPaging(params);
    setDataNewest(res || []);
    setLoadingDataNewest(false);
  };

  const onGetDataCategory = async () => {
    setLoadingDataCategory(true);
    const res = await getAllCategory();
    setDataCategory(res || []);
    setLoadingDataCategory(false);
  };

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
          {router.query.search && (
            <Col span={24} className="center-center">
              {loadingDataSearch ? (
                showSkeleton()
              ) : (
                <ListNews
                  title={`KẾT QUẢ CHO TÌM KIẾM: "${router.query.search}" - Số bài: ${dataSearch?.data.totalRecord}`}
                  data={dataSearch?.data}
                />
              )}
            </Col>
          )}
          <Col span={24} className="center-center">
            {loadingDataNewest ? (
              showSkeleton()
            ) : (
              <ListNews
                title={"BÀI VIẾT MỚI CẬP NHẬT"}
                data={dataNewest?.data}
              />
            )}
          </Col>
          {/* List of articles by category level 0 */}
          {loadingDataCategory
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
          -
        </Row>
      </div>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
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
