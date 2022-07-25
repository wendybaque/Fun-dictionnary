import React from "react";

function Footer() {
  return (
    <div className="flex flex-row justify-around p-6 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg">
      <p className="">Copyright ©2022</p>
      <p className="">Made with ❤ by <a href="https://wendybaquedevweb.netlify.app/" target="_blank" rel="noreferrer" alt="portfolio de Wendy Baqué" className="hover:text-blue-700 hover:font-bold underline underline-offset-1">Wendy Baqué</a></p>
    </div>
  );
}
export default Footer;