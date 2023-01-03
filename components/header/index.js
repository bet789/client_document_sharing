import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Input, Space } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import Menu from "../menu";
import { getMenu } from "../../helpers/helper";
import logo from "../../assets/images/taipei101.png";

const { Search } = Input;

export default function Header() {
  const router = useRouter();
  const [menuHeader, setMenuHeader] = useState([]);

  useEffect(() => {
    fetchDataMenu();
  }, []);

  const fetchDataMenu = async () => {
    const _res = await getMenu();
    setMenuHeader(_res);
  };

  const onSearch = (value) => {
    router.push("/?search=" + value);
  };

  return (
    <div className="header">
      {/* <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div> */}

      {/* <div className="top-header"></div> */}
      <Space className="header-main">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="" />
          </Link>
        </div>
        <nav>
          <Menu menu={menuHeader} />
        </nav>
        <Search placeholder="Tìm kiếm" onSearch={onSearch} enterButton />
      </Space>
    </div>
  );
}
