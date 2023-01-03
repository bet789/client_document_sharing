import Link from "next/link";
import React from "react";
import { Row, Col, Typography } from "antd";
import Image from "next/legacy/image";

export default function ItemPostSidebar(props) {
  const { data } = props;
  return (
    <Link
      href={`/post-detail/${data.id}`}
      style={{ marginBottom: 8, display: "block" }}
    >
      <Row gutter={[8, 8]} className="item-post-sidebar">
        <Col xl={6}>
          <Image
            className="img-post-sidebar"
            src={data.thumbnail}
            alt=""
            layout="responsive"
            objectFit="cover"
            height={60}
            width={"100%"}
          />
        </Col>
        <Col xl={18}>
          <Typography.Title level={5} ellipsis style={{ marginBottom: 0 }}>
            {data.title}
          </Typography.Title>
          <Typography.Paragraph className="description-post-sidebar">
            {data.description}
          </Typography.Paragraph>
        </Col>
      </Row>
    </Link>
  );
}
