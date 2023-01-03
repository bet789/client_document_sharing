import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Row, Col, Typography, Space } from "antd";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";
import dayjs from "dayjs";
import { getPostById, getPostPaging } from "../../helpers/helper";
import ItemPostSidebar from "../../components/itemPostSidebar";

const { Title, Paragraph } = Typography;

const fetcher = (url) =>
  axios
    .get(url, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
    .then((res) => res);
export default function PostDetailPages(props) {
  const router = useRouter();
  const { slug } = router.query;
  const [dataPost, setDataPost] = useState([]);
  const [categoryId, setCatagotyId] = useState();
  const [dataSideBar, setDataSideBar] = useState([]);
  const [dataPostNewest, setDataPostNewest] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    fetchPostById();
  }, [router.isReady, slug]);

  useEffect(() => {
    if (!router.isReady) return;
    if (categoryId) fetchPostByCategoryId();
  }, [categoryId]);

  useEffect(() => {
    fetchPostNewest();
  }, []);

  const fetchPostById = async () => {
    const _res = await getPostById({ id: slug });
    setDataPost(_res?.data || []);
    setCatagotyId(_res?.data.categoryId);
  };

  const fetchPostByCategoryId = async () => {
    const _res = await getPostPaging({
      pageIndex: 1,
      pageSize: 5,
      categoryId: categoryId,
    });
    setDataSideBar(_res?.data?.data || []);
  };

  const fetchPostNewest = async () => {
    const _res = await getPostPaging({
      pageIndex: 1,
      pageSize: 5,
    });
    setDataPostNewest(_res?.data?.data || []);
  };

  return (
    <>
      <div className="wrapper">
        <Row xl={24} gutter={[16, 16]}>
          <Col xl={18}>
            <Title level={2}>{dataPost?.title}</Title>
            <Space size={"middle"}>
              <Space align="midle" size={5}>
                <CalendarOutlined />
                <Paragraph>
                  {dayjs(dataPost?.createdTime).format("DD/MM/YYYY")}
                </Paragraph>
              </Space>

              <Space align="midle" size={5}>
                <UserOutlined />
                <Paragraph>{dataPost?.userFullName}</Paragraph>
              </Space>
            </Space>
            <Paragraph italic>{dataPost?.description}</Paragraph>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: dataPost?.content }}
            ></div>
          </Col>
          <Col xl={6} className="side-bar-post">
            <Title level={3}>{"Bài viết liên quan"}</Title>
            {dataSideBar?.length > 0 &&
              dataSideBar?.map((item) => {
                return <ItemPostSidebar key={item.id} data={item} />;
              })}

            <Title level={3}>{"Bài viết mới cập nhật"}</Title>
            {dataPostNewest?.length > 0 &&
              dataPostNewest?.map((item) => {
                return <ItemPostSidebar key={item.id} data={item} />;
              })}
          </Col>
        </Row>
      </div>
    </>
  );
}
