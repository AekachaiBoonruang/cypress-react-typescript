import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardButton,
} from "./LoginCard";

export const LoginCard = () => {
  return (
    <div className="App">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Log In</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <CardInput placeholder="Username" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="E-mail" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Password" type="password" required />
            <CardIcon className="fa fa-eye" />
          </CardFieldset>

          <CardFieldset>
            <CardButton type="button">Log In</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>
  );
}
