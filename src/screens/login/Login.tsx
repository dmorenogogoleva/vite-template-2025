import cn from "classnames";
import { Button } from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { SpaceIcon } from "@rescui/icons";
import { colCn, Container, rowCn, Section } from "@webteam/layout";
/*import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkAuth } from "../../api/api-client.ts";
import { LoadingIcon } from "@rescui/icons";*/
//
// import { useAppDispatch } from "../../redux/hooks.ts";
//
// import { useNavigate } from "react-router-dom";
import './Login.css';

export const Login = () => {
  const textCn = useTextStyles();
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null);

  /*useEffect(() => {
      checkAuth()
          .then((res: any) => {
              setIsAuthenticated(res.status);
          })
          .catch(() => {
              setIsAuthenticated(false);
          });
  }, []);*/

  /* if (isAuthenticated === null) {
       return <LoadingIcon />;
   }

   if (isAuthenticated) {
       return <Navigate to="/list" />;
   }*/

  return (<Section className="login-section">
    <div className="login-section__bg wt-display-none wt-display-md-block"/>
    <Container className="">
      <h1 className={cn(textCn('rs-hero'), 'text-center', 'jb-offset-top-12')}>hello world</h1>
      <div className={cn(rowCn({ justify: 'center' }), 'jb-offset-top-48', 'login-section__buttons')}>
        <Button size="l" mode="rock" icon={<SpaceIcon/>}
                className={cn(colCn(3), 'jb-offset-top-16', 'login-section__button')}>Log in with GitHib</Button>
        <Button size="l" mode="outline"
                onClick={() => console.log('hello world')}
                className={cn(colCn(3), 'jb-offset-top-16', 'login-section__button')}>Demo version</Button>
      </div>
    </Container>
  </Section>)
}
