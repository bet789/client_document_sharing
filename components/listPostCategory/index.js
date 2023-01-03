import React, { useState } from "react";
import { Typography, Row, Col, Divider } from "antd";
import useSWR from "swr";
import axios from "axios";
import qs from "qs";
import { api } from "../../helpers/config";
import * as url from "../../helpers/url_helper";

import Posts from "../posts";

const { Title } = Typography;

const fetcher = (url) =>
  axios
    .get(url, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
    .then((res) => res);

export default function ListPostCategory(props) {
  const { data } = props;

  const [params, setParams] = useState({ pageIndex: 1, pageSize: 12 });

  const {
    data: dataNewest,
    error: errorNewest,
    isLoading: isLoadingdataNewest,
  } = useSWR(
    `${api.API_URL}${url.API_POST_GET_PAGING}?${qs.stringify(
      params
    )}&categoryId=${data?.id || data}`,
    fetcher
  );

  return (
    <div className="box-posts">
      <Title className="head-title" level={3}>
        {data.name}
      </Title>
      <Row gutter={[16, 16]}>
        {dataNewest?.data?.data?.map((item) => {
          return (
            <Col key={item.id} xl={data?.id ? 4 : 6} xs={24}>
              <Posts data={item} />
            </Col>
          );
        })}
      </Row>
      <Divider />
    </div>
  );
}
