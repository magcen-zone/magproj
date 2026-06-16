// @ts-check

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'next-app',
  description: 'supadevops Next.js 应用',
};

/**
 * 根布局：包裹所有页面的 html / body。
 * @param {{ children: import('react').ReactNode }} props
 */
export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
