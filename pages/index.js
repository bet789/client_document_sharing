import Head from "next/head";
import Header from "../components/header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Chia sẻ tài liệu nội bộ</title>
        <meta name="description" content="Chia sẻ tài liệu nội bộ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
