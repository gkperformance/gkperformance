@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Lexend", ui-sans-serif, system-ui, sans-serif;
  --color-primary: #f4e225;
  --color-bg-dark: #222110;
  --color-bg-light: #f8f8f5;
}

@layer base {
  body {
    @apply bg-bg-dark text-slate-100 antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold tracking-tight uppercase italic;
  }
}

@layer components {
  .section-container {
    @apply max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24;
  }

  .btn-primary {
    @apply bg-primary text-bg-dark font-black uppercase tracking-widest px-8 py-4 rounded-lg transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center;
  }

  .btn-outline {
    @apply border-2 border-primary text-primary font-black uppercase tracking-widest px-8 py-4 rounded-lg transition-all hover:bg-primary/10 active:scale-95 cursor-pointer flex items-center justify-center;
  }
}
