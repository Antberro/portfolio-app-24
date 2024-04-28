import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareLetterboxd } from "react-icons/fa6";

export default function MyFooter() {
    return (
        <footer className="flex flex-none flex-col h-24 justify-center items-center">
            <div className="flex space-x-2 text-2xl mb-4">
                <a className="highlight-on-hover" href="https://www.linkedin.com/in/antonio-berrones/"><FaLinkedin /></a>
                <a className="highlight-on-hover" href="https://www.instagram.com/__tony.b__/"><FaInstagram /></a>
                <a className="highlight-on-hover" href="https://github.com/antberro"><FaGithub /></a>
                <a className="highlight-on-hover" href="https://letterboxd.com/aberro/"><FaSquareLetterboxd /></a>
            </div>
            <div className="text-[0.7rem] lg:text-sm mb-2">Developed with Figma, Next.js, Tailwind CSS and Vercel.</div>
            <div className="text-[0.6rem]">© 2024 ANTONIO BERRONES</div>
        </footer>
    )
}