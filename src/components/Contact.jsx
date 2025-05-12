import SvgIcon from "./SvgIcon";
import iconsContact from "../utils/iconsContact";

const Contact = () => {
  return (
    <>
      <ul className="text-[#c2e8f0] flex gap-2.5">
        {iconsContact.map((icon) => (
          <li key={icon.name}>
            <a href={icon.href} target={icon.target} rel={icon.rel}>
              <SvgIcon viewBox={icon.viewBox} path={icon.path} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contact;
