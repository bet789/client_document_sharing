import React from "react";
import { Skeleton, Space, Col } from "antd";
export default function SkeletonPost() {
  return (
    <Col xl={4} xs={24}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Skeleton.Image active={true} />
        <Skeleton.Input active={true} size={"default"} block={true} />
        <Skeleton.Input active={true} size={"default"} block={true} />
        <Skeleton.Input active={true} size={"default"} block={true} />
      </Space>
    </Col>
  );
}
