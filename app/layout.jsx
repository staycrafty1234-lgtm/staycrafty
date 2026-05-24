import './globals.css'

export const metadata = {
  title: 'StayCrafty',
  description: 'Luxury handcrafted resin decor'
}
export const metadata = {
  title: 'StayCrafty | Luxury Handmade Resin Art',
  description:
    'Shop handcrafted resin trays, clocks, decor pieces, and luxury handmade art at StayCrafty.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
