import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
} from "./LoginCard";

import {InputField} from '../InputField/InputField'
import { SubmitButton } from "../Button/SubmitButton";

export const LoginCard = () => {
  return (
    <div className="App">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Log In</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <InputField placeHolder={'E-mail'} type={'text'}/>
          </CardFieldset>
          <CardFieldset>
            <InputField placeHolder={'Password'} type={'password'}/>
          </CardFieldset>

          <CardFieldset>
            <SubmitButton text="Log In" />
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>
  );
}
