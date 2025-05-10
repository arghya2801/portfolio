import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="flex flex-col items-center justify-center w-full h-24 border-t dark:border-gray-600">
          <div className="flex justify-center">
            &copy; {new Date().getFullYear()} Arghya Chakrabarty
          </div>
        </footer>
    </>
  )
}

export default Footer