import "@guide/layout.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <article>{children}</article>;
}
