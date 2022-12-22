import React from "react";
import Image from "next/image";
import { AudioOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { useRouter } from "next/router";

import Menu from "../menu";

import logo from "../../assets/images/taipei101.png";

const { Search } = Input;

const menu = [
  {
    key: "naptien",
    label: "NẠP TIỀN",
    path: "/nap-tien",
    childrens: [
      {
        key: "huongdannaptien",
        label: "Hướng Dẫn Nạp Tiền",
        path: "/huong-dan-nap-tien",
        childrens: [
          {
            key: "huongdannaptien",
            label: "Hướng Dẫn Nạp Tiền",
            path: "/huong-dan-nap-tien",
            childrens: [],
          },
        ],
      },
      {
        key: "scanQR",
        label: "Quét Mã QR",
        path: "/scan-qr",
        childrens: [],
      },
    ],
  },
  {
    key: "ruttien",
    label: "RÚT TIỀN",
    path: "/rut-tien",
    childrens: [
      {
        key: "huongdanruttien",
        label: "Hướng Dẫn Rút Tiền",
        path: "/huong-dan-rut-tien",
        childrens: [],
      },
      {
        key: "scanQR1",
        label: "Quét Mã QR Rút tiền",
        path: "/scan-qr1",
        childrens: [],
      },
    ],
  },
  {
    key: "ruttien",
    label: "LUẬT CHƠI",
    path: "/rut-tien",
    childrens: [
      {
        key: "huongdanruttien",
        label: "Hướng Dẫn Rút Tiền",
        path: "/huong-dan-rut-tien",
        childrens: [],
      },
      {
        key: "scanQR1",
        label: "Quét Mã QR Rút tiền",
        path: "/scan-qr1",
        childrens: [],
      },
    ],
  },
  {
    key: "ruttien",
    label: "KÊNH CHÁT",
    path: "/rut-tien",
    childrens: [
      {
        key: "huongdanruttien",
        label: "Hướng Dẫn Rút Tiền",
        path: "/huong-dan-rut-tien",
        childrens: [],
      },
      {
        key: "scanQR1",
        label: "Quét Mã QR Rút tiền",
        path: "/scan-qr1",
        childrens: [],
      },
    ],
  },
  {
    key: "ruttien",
    label: "MỘT SỐ KHÁI NIỆM",
    path: "/rut-tien",
    childrens: [
      {
        key: "huongdanruttien",
        label: "Hướng Dẫn Rút Tiền",
        path: "/huong-dan-rut-tien",
        childrens: [],
      },
      {
        key: "scanQR1",
        label: "Quét Mã QR Rút tiền",
        path: "/scan-qr1",
        childrens: [],
      },
    ],
  },
  {
    key: "ruttien",
    label: "HƯỚNG DẪN CỘNG KHUYẾN MÃI",
    path: "/rut-tien",
    childrens: [
      {
        key: "huongdanruttien",
        label: "Hướng Dẫn Rút Tiền",
        path: "/huong-dan-rut-tien",
        childrens: [],
      },
      {
        key: "scanQR1",
        label: "Quét Mã QR Rút tiền",
        path: "/scan-qr1",
        childrens: [],
      },
    ],
  },
  {
    key: "ruttien",
    label: "QUY TRÌNH CHĂM SÓC KHÁCH HÀNG",
    path: "/rut-tien",
    childrens: [
      {
        key: "huongdanruttien",
        label: "Hướng Dẫn Rút Tiền",
        path: "/huong-dan-rut-tien",
        childrens: [
          {
            key: "huongdanruttien",
            label: "Hướng Dẫn Rút Tiền",
            path: "/huong-dan-rut-tien",
            childrens: [],
          },
        ],
      },
      {
        key: "scanQR1",
        label: "Quét Mã QR Rút tiền",
        path: "/scan-qr1",
        childrens: [],
      },
    ],
  },
];

export default function Header() {
  const router = useRouter();
  const onSearch = (value) => {
    router.push("?search=" + value);
  };

  return (
    <div className="header">
      {/* <div className="top-header"></div> */}
      <Space className="header-main">
        <div className="logo">
          <Image src={logo} alt="" />
        </div>
        <nav>
          <Menu menu={menu} />
        </nav>
        <Search placeholder="Tìm kiếm" onSearch={onSearch} enterButton />
      </Space>
    </div>
  );
}
