import Header from "../header";
import Footer from "../footer";
import { FloatButton, Tooltip } from "antd";
import {
  UserSwitchOutlined,
  LogoutOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";
export default function Layout({ children }) {
  const onLogout = () => {
    window.location.replace("/logout");
  };
  return (
    <>
      <Header />
      <main>{children}</main>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          right: 24,
        }}
        icon={<UserSwitchOutlined />}
      >
        <Tooltip placement="left" title={"Đăng xuất"}>
          <FloatButton icon={<LogoutOutlined />} onClick={onLogout} />
        </Tooltip>
        <Tooltip placement="left" title={"Thông tin cá nhân"}>
          <Link href={"/profile"}>
            <FloatButton icon={<InfoCircleOutlined />} />
          </Link>
        </Tooltip>
      </FloatButton.Group>
      <Footer />
    </>
  );
}
