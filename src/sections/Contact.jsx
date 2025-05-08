import GitHubIcon from "../utils/GitHubIcon";
import LinkedinIcon from "../utils/LinkedinIcon";
import InstagramIcon from "../utils/InstagramIcon";

const Contact = () => {
  return (
    <ul className=" text-[#c2e8f0] flex gap-2 px-0.5 py-10">
      <li>
        <a
          href="https://github.com/gabriel-m-gomes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/gabriel-macedo-gomes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/gabriel_macedo44"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </li>
    </ul>
  );
};

export default Contact;
