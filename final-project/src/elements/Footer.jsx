export const Footer = ({ style }) => {
  return (
    <footer className={`content-padding footer ${style}`}>
      <div className="py-5">Questions? Call 000-800-919-1694</div>
      <div>
        <ul
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          <li>
            <a href="http://" target="_blank">
              FAQ
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Media Center
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Ways to Watch
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Cookie Prefernces
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Speed Test
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Help Center
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Investor Relations
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Corporate Information
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Legal Notice
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Account
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Jobs
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Privacy
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Contact Us
            </a>
          </li>
          <li>
            <a href="http://" target="_blank">
              Only on Netflix
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
