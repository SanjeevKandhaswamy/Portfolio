export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© {currentYear} Sanjeev Kandhaswamy E. All rights reserved.</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Designed and built for displaying Portfolio.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
