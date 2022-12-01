import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>cosmin</title>
      </head>
      <body className="bg-black">{children}</body>
    </html>
  );
}
