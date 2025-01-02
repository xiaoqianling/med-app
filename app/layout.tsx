import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "海天数字医疗",
  description: "数字医疗系统 TODO: 补充描述",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        {/* layout布局 */}
        <h3>这是根layout</h3>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
