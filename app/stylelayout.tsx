"use client";
import { StyleProvider } from "@ant-design/cssinjs";

export default function StyleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StyleProvider layer>{children}</StyleProvider>;
}
