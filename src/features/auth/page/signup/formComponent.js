import * as React from "react";
import {
  FieldWrapper,
} from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import {
  Error,
  FloatingLabel,
} from "@progress/kendo-react-labels";


export const FloatingLabelEmailInput = (fieldRenderProps) => {
  const {
    validationMessage,
    visited,
    label,
    id,
    valid,
    value,
    disabled,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = visited && validationMessage;
  return (
    <FieldWrapper>
      <FloatingLabel
        style={{ color: valid && visited ? '#ffff' : null }}
        label={label}
        editorValue={value}
        editorValid={valid}
        editorDisabled={disabled}
        editorId={id}
      >
        <Input
          value={value}
          valid={valid}
          id={id}
          disabled={disabled}
          {...others}
        />
      </FloatingLabel>
      {showValidationMessage && <Error>{validationMessage}</Error>}
    </FieldWrapper>
  );
};
