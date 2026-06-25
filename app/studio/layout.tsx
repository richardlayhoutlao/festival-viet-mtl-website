export const metadata = {
  title: 'Festival Viet - CMS',
  description: 'Sanity Studio for Festival Viet organizers',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}