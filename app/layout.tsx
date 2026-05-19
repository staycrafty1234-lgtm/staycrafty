import './globals.css'

export const metadata = {
  title: 'StayCrafty',
  description: 'Luxury handcrafted resin decor'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
