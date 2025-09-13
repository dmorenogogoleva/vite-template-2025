import cn from 'classnames';
import { Container, Section } from "@webteam/layout";
import { useTextStyles } from "@rescui/typography";
import { Link } from "react-router-dom";

import './NotFound.css';

export const NotFound = () => {
  const textCn = useTextStyles();

  return (<Section className="not-found">
      <Container>
        <h1 className={textCn('rs-hero')}>404</h1>
        <p className={cn(textCn('rs-text-1'), 'jb-offset-top-12')}>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="jb-offset-top-24">
          <Link to="/" className={textCn('rs-link')}>
            Go back to the homepage
          </Link>
        </div>
      </Container>
    </Section>);
};