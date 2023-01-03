import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Row, Col, Typography } from "antd";
import ListPostCategory from "../../components/listPostCategory";

export default function PostDetailPages() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <div className="wrapper">
        <Row xl={24} gutter={[16, 16]}>
          <Col xl={18}>
            <ListPostCategory data={slug} />
          </Col>
          <Col xl={6} className={"side-bar-category"}>
            <Typography.Title level={3}>
              {"Chuyên mục liên quan"}
            </Typography.Title>
            <Typography.Title level={3}>
              {"Chuyên mục mới cập nhật"}
            </Typography.Title>
          </Col>
        </Row>
      </div>
    </>
  );
}
