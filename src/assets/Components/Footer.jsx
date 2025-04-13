// Place this at the bottom of your App.jsx or as a separate <Footer /> component
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#172842]  text-white text-sm text-center py-4 mt-10 shadow-inner">
  <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between sm:px-10">
    <p className="">&copy; {new Date().getFullYear()} Arnav Raj. All rights reserved.</p>
    <a
      href="https://github.com/arnavraj-7/ToDoList"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:text-black transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33C3.72 14.91 3.3 13.38 3.3 13.38c-.36-.91-.88-1.15-.88-1.15-.72-.49.05-.48.05-.48.79.06 1.2.81 1.2.81.71 1.2 1.87.86 2.33.66.07-.52.28-.86.5-1.06-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 8 3.5a9.57 9.57 0 0 1 2.5.34c1.9-1.29 2.73-1.02 2.73-1.02.56 1.38.21 2.4.11 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.29.25.54.74.54 1.5v2.22c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      <span>GitHub</span>
    </a>
  </div>
</footer>

  )
}

export default Footer
