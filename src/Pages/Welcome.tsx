import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <div className="p-6 flex flex-col justify-end h-full">
      <div>
        <h1 className="text-[22px] font-semibold text-textDark leading-[28px] mb-2">
          Welcome to PopX
        </h1>

        <p className="text-[14px] text-textLight leading-[20px] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <Button text="Create Account" onClick={() => nav("/register")} />
        <div className="mt-3">
          <Button
            text="Already Registered? Login"
            onClick={() => nav("/login")}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}