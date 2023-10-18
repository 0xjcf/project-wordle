import React from "react";

type BannerProps = {
  variant: "happy" | "sad";
  children: React.ReactNode;
};

function Banner({ variant, children }: BannerProps) {
  return <div className={`${variant} banner`}>{children}</div>;
}

export default Banner;
