import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText margin_top">
            Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
          </span>
        <a className={css.footer_links} href="https://www.linkedin.com/in/jagdeesh-kumar-3231b8154" target="_blank">
          LinkedIn
        </a>
        <a className={css.footer_links} href="https://github.com/jimmy818" target="_blank">
          GitHub
        </a>
        <a className={css.footer_links} href="https://stackoverflow.com/users/9348627/jagdeesh-kumar" target="_blank">
          Stack Overflow
        </a>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>69 Tulip Drive, L6Y 3W8, Brampton Ontario, Canada</p>
          </div>
          <ul className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
