import "./index.scss";
import { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "海天数字医疗",
  description: "数字医疗系统 TODO: 补充描述",
};
