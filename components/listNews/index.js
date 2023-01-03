import React from "react";
import { Typography, Row, Col, Divider } from "antd";

import Posts from "../posts";

const { Title } = Typography;

export default function ListNews(props) {
  const { data } = props;
  return (
    <div className="box-posts">
      <Title className="head-title" level={3}>
        {props.title}
      </Title>
      <Row gutter={[16, 16]}>
        {data?.data?.map((item) => {
          return (
            <Col key={item.id} xl={4} xs={24}>
              <Posts data={item} />
            </Col>
          );
        })}
      </Row>
      <Divider />
    </div>
  );
}
