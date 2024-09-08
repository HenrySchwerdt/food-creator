export function NavBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6 shadow-md">
      <nav className="flex items-center gap-8 text-base font-semibold">
        <a
          className="text-muted-foreground transition-colors hover:text-foreground"
          href="/"
        >
          Menu
        </a>
        <a
          href="/discounts"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Discounts
        </a>
        <a
          className="text-muted-foreground transition-colors hover:text-foreground"
          href="/list"
        >
          Einkaufsliste
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
        <button className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
