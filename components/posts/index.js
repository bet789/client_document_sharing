import React from "react";
import Image from "next/legacy/image";
import { Card } from "antd";
import dayjs from "dayjs";
import thumb from "../../assets/images/thumb-post.png";
import Link from "next/link";

const { Meta } = Card;
export default function Posts(props) {
  const { data } = props;
  console.log("🚀 ~ file: index.js:11 ~ Posts ~ data", data);
  return (
    <>
      <Link href={`/post-detail/${data.id}`}>
        <Card
          className="card-post"
          hoverable
          style={{
            width: "100%",
          }}
          cover={
            <Image
              alt="example"
              src={data?.thumbnail || thumb.src}
              // src={thumb.src}
              layout="responsive"
              objectFit="cover"
              height={50}
              width={"100%"}
            />
          }
        >
          <Meta title={data?.title} description={data?.description} />

          <div className="ant-card-meta-description date-post">
            {dayjs(data?.createdTime).format("DD/MM/YYYY")}
          </div>
        </Card>
      </Link>
    </>
  );
}
