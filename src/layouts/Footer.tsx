const Footer = () => {
  return (
    <>
      <hr className="divider" />

      <footer className="footer">
        <div className="footer__content flow" data-flow-space="sm">
          <p>
            <a href="/" className="styled-link">
              QuickSnipDart
            </a>{" "}
            is an open-source project, forked from{" "}
            <a
              href="https://github.com/dostonnabotov/quicksnip"
              className="styled-link"
            >
              <strong>QuickSnap</strong>
            </a>
            .{" "}
            <a href="/" className="styled-link">
              QuickSnipDart
            </a>{" "}
            categorizes handy code snippets and components for dart and flutter.
          </p>
          <p>
            Built with love and powered by an{" "}
            <a
              href="https://github.com/mymangatheque/quicksnipdart"
              target="_blank"
              rel="noopener noreferrer"
              className="styled-link"
            >
              awesome community
            </a>
            . 🚀
          </p>
        </div>
        <nav className="footer__nav">
          <ul className="flow" data-flow-space="sm">
            <li>
              <a
                href="https://github.com/mymangatheque/quicksnipdart/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="styled-link"
              >
                Add your own snippet
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mymangatheque/quicksnipdart"
                target="_blank"
                rel="noopener noreferrer"
                className="styled-link"
              >
                Edit this page on GitHub
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer__nav">
          <ul className="flow" data-flow-space="sm">
            <li>
              <a
                href="https://github.com/mymangatheque/quicksnipdart"
                target="_blank"
                rel="noopener noreferrer"
                className="styled-link"
              >
                See the community
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
