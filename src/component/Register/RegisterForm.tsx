import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  CardButton,
  CardLink
} from "./RegisterCard.js";

import { InputField } from "../InputField/InputField";
import { SubmitButton } from "../Button/SubmitButton";

export const RegisterCard = () => {
  return (
    <div className="App">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Register</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <InputField placeHolder={'Username'} type={'text'}/>
          </CardFieldset>
          <CardFieldset>
            <InputField placeHolder={'E-mail'} type={'text'}/>
          </CardFieldset>
          <CardFieldset>
            <InputField placeHolder={'Password'} type={'password'}/>
          </CardFieldset>

          <CardFieldset>
            <CardOptionsNote>Or sign up with Facebook</CardOptionsNote>
          </CardFieldset>

          <CardFieldset>
            <SubmitButton text={"Register"} />
          </CardFieldset>

          <CardFieldset>
            <CardLink>I already have an account</CardLink>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>
  );
}
