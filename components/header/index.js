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
    var arrMenu = [];
    var arrBranch = [];
    const _res = await getMenu();
    _res.forEach((element) => {
      if (arrBranch.includes(element.branchName)) return;
      arrBranch.push(element.branchName);
    });

    arrBranch.forEach((item) => {
      var obj = {};
      obj.id = item;
      obj.isBranch = true;
      obj.name = item;
      obj.children = [];
      _res?.forEach((itemMenu) => {
        if (itemMenu.branchName.toUpperCase() === item.toUpperCase())
          obj.children.push(itemMenu);
      });

      arrMenu.push(obj);
    });

    setMenuHeader(arrBranch?.length === 1 ? _res : arrMenu);
  };

  const onSearch = (value) => {
    router.push("/?search=" + value);
  };

  return (
    <div className="header">
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
