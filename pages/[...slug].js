import React from "react";
import { useRouter } from "next/router";

export default function CatchAllRoutes() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("🚀 CatchAllRoutes ", slug);

  return (
    <>
      <div className="wrapper">
        <p>CatchAllRoutes - Route: {slug}</p>
      </div>
    </>
  );
}
