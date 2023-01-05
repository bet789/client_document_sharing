import Link from "next/link";
import React from "react";
import Image from "next/legacy/image";
import dayjs from "dayjs";
import { Row, Col, Typography, Space } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

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
            height={75}
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
          <Space
            align="midle"
            size={5}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ClockCircleOutlined style={{ fontSize: 14 }} />
            <Paragraph style={{ fontSize: 12, marginBottom: 0 }}>
              {dayjs(data?.createdTime).format("DD/MM/YYYY")}
            </Paragraph>
          </Space>
        </Col>
      </Row>
    </Link>
  );
}
