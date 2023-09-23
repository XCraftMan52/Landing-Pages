import React from "react";
import type { Metadata } from "next";
import Landing from "./Landing";

export const metadata: Metadata = {
  title: "404 Page Not Found",
  description: "You have reached a domain managed by Lucas Webber.",
};
function NotFound() {
  return <Landing />;
}

export default NotFound;
