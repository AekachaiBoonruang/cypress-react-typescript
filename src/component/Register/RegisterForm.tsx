import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsNote,
  CardButton,
  CardLink
} from "./RegisterCard.js";

export const RegisterCard = () => {
  return (
    <div className="App">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Sign Up</CardHeading>
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
            <CardOptionsNote>Or sign up with Facebook</CardOptionsNote>
          </CardFieldset>

          <CardFieldset>
            <CardButton type="button">Sign Up</CardButton>
          </CardFieldset>

          <CardFieldset>
            <CardLink>I already have an account</CardLink>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>
  );
}
