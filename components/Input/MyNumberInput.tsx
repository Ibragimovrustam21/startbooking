interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  myClass?: string,
}

import { InputHTMLAttributes } from "react"

export const MyNumberInput = ({ myClass, ...props }: IInput) => {
  const removeSpecialCharacters = (e: any) => {
    // replacing no's other than 0-9
    e.target.value = e.target.value.replace(/[^0-9 ]/g, '');
    // to replace special characters
    e.target.value = e.target.value.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '');
  };

  const checkLength = (e: any) => {
    const KEYS = {
      leftKey: 37,
      rightKey: 39,
      backspace: 8,
      deleteKey: 46,
      digitZero: 48,
      digitNine: 57
    };
    if (
      e.keyCode === KEYS.backspace ||
      e.keyCode === KEYS.deleteKey ||
      e.keyCode === KEYS.rightKey ||
      e.keyCode === KEYS.leftKey) {
      return true;
    }
    if (e.keyCode < KEYS.digitZero ||
      e.keyCode > KEYS.digitNine ||
      e.target.value.length === e.target.maxLength ||
      e.shiftKey) {
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
    return true;
  }
  return (
    <input
      onKeyDown={(e) => checkLength(e)}
      onKeyUp={removeSpecialCharacters}
      className={`${myClass} block rounded px-2 text-font-color focus:outline-none`}
      {...props}
    />
  )
}
