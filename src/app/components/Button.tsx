import React from "react";

type Props = {
  children?: string | null;
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, clickHandler }: Props) => {
  return (
    <>
      <button
        onClick={clickHandler}
        className="bg-neutral-50 shadow-[6px_6px_14px_#b8b8b8,-6px_-6px_14px_#f0f0f0] rounded-sm w-20 h-20   border-neutral-600 text-5xl font-black "
      >
        {children}
      </button>
    </>
  );
};

export default Button;
{
  /* <Button onClick={(e) => mainFunction(e, 0)}></Button>
          <Button onClick={(e) => mainFunction(e, 1)}></Button>
          <Button onClick={(e) => mainFunction(e, 2)}></Button>
          <Button onClick={(e) => mainFunction(e, 3)}></Button>
          <Button onClick={(e) => mainFunction(e, 4)}></Button>
          <Button onClick={(e) => mainFunction(e, 5)}></Button>
          <Button onClick={(e) => mainFunction(e, 6)}></Button>
          <Button onClick={(e) => mainFunction(e, 7)}></Button>
          <Button onClick={(e) => mainFunction(e, 8)}></Button> */
}
