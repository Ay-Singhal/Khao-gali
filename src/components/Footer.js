// Footer.jsx
import { colors } from "../ui-tokens";

const Footer = () => (
  <footer className="mt-20 bg-gray-100">
    <div className="page flex flex-col items-center py-6">
      <p className="text-sm">&copy; {new Date().getFullYear()} Khao Gali</p>
      <p className={`text-xs ${colors.mutedText}`}>Built with React + Tailwind</p>
    </div>
  </footer>
);
export default Footer;
