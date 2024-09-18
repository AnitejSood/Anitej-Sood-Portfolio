const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 text-center md:text-left">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/AnitejSood" className="flex justify-center items-center">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/anitejcsood/" className="flex justify-center items-center">
            <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/3 h-1/3" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/sood.anitej/" className="flex justify-center items-center">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Anitej Sood. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

