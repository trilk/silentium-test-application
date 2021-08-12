import ButtonState from "../interfaces/ButtonState";
interface ButtonProps {
  id: string;
  buttons: Array<ButtonState>;
  moveStep: any;
}

const UserButton = ({ id, buttons, moveStep }: ButtonProps) => {
  const btnState = buttons.find((btn) => btn.id === id);
  const nextStep = () => {
    moveStep(btnState);
  };

  return (
    <div
      className={`d-flex align-items-center justify-content-center circle-button ${
        btnState?.id
      } ${btnState?.selected ? "selected" : ""} ${
        btnState?.disabled ? "disabled" : ""
      }`}
      onClick={() => nextStep()}
    >
      <span>{id.toUpperCase()}</span>
    </div>
  );
};

export default UserButton;
