import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="flex flex-col items-center justify-center w-full h-24 border-t dark:border-gray-600">
          <div className="flex items-center justify-center">
            <a href="https://github.com/arghya2801" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-300 hover:underline mr-4">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/arghya_333/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
              LinkedIn
            </a>
          </div>
        </footer>
    </>
  )
}

export default Footer