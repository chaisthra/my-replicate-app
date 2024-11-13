import './global.css'

export const metadata = {
  title: 'Plating Image',
  description: 'Image plating application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}