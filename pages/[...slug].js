import React from "react";
import { useRouter } from "next/router";

export default function CatchAllRoutes() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("🚀 ~ file: [...slug].js:7 ~ CatchAllRoutes ~ slug", slug);

  return <p>Route: {slug}</p>;
}
