import { useState, type FormEvent } from "react";
import { useServices } from "../../hooks/ServicesHooks";
import type { INewUserDto } from "../../models/dtos/INewUserDto";
import { DayPicker } from "react-day-picker";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/ModalHooks";
import {
  CalendarDaysIcon,
  EnvelopeIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function Register() {
  const { userService } = useServices();
  const { showModal } = useModal();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState<Date | undefined>();

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  async function registerUser(e: FormEvent) {
    e.preventDefault();
    if (!userName || !email || !password || !confirmPassword) {
      throw new Error("All fields are required.");
    }
    if (password !== confirmPassword) {
      throw new Error("Password doesn't match.");
    }

    const newUser: INewUserDto = {
      userName: userName,
      firstName: "",
      lastName: "",
      password: password,
      email: email,
      birthDate: birthDate,
    };
    const registerUser = await userService.registerUserAsync(newUser);

    if (!registerUser) {
      throw new Error("Something went wrong !");
    }

    await showModal({
      title: "Success !",
      message: `${registerUser.userName} created successfully !`,
    });

    navigate("/login");
  }

  return (
    <div className="page mt-12">
      <form
        id="register-form"
        className="flex flex-col flex-wrap justify-center items-center gap-2"
        onSubmit={registerUser}
      >
        <div
          id="form-fields"
          className="white-bg-fat-border ml-7 gap-4 items-center pt-6 pb-10 px-12"
        >
          <span className="relative flex flex-row items-center gap-2 h-10 w-52 bottom-border-1">
            <UserIcon className="w-5 h-5 left-2 opacity-80" />
            <input
              type="text"
              className="no-border justify-center"
              id="userName"
              name="userName"
              placeholder="Username..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </span>
          <span className="relative flex flex-row items-center gap-2 h-10 w-52 bottom-border-1">
            <EnvelopeIcon className="w-5 h-5 left-2 opacity-80" />
            <input
              type="text"
              className="no-border justify-center"
              id="email"
              name="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          <span className="relative flex flex-row items-center gap-2 h-10 w-52 bottom-border-1">
            <KeyIcon className="w-5 h-5 left-2 opacity-80" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password..."
              className="no-border justify-center"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onMouseDown={() => {
                setShowPassword(true);
              }}
              onMouseUp={() => setShowPassword(false)}
              className="w-5 h-5 absolute right-2"
            >
              {showPassword ? (
                <EyeIcon focusable={false} />
              ) : (
                <EyeSlashIcon focusable={false} />
              )}
            </button>
          </span>
          <span className="relative flex flex-row items-center gap-2 h-10 w-52 bottom-border-1">
            <KeyIcon className="w-5 h-5 left-2 opacity-80" />
            <input
              type={showPasswordConfirm ? "text" : "password"}
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Confirm Password..."
              className="no-border justify-center"
              autoComplete="off"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onMouseDown={() => {
                setShowPasswordConfirm(true);
              }}
              onMouseUp={() => setShowPasswordConfirm(false)}
              className="w-5 h-5 absolute right-2"
            >
              {showPasswordConfirm ? (
                <EyeIcon focusable={false} />
              ) : (
                <EyeSlashIcon focusable={false} />
              )}
            </button>
          </span>
          <span className="relative flex flex-row items-center gap-2 h-10 w-52 bottom-border-1">
            <CalendarDaysIcon className="w-5 h-5 left-2 opacity-80" />
            <button
              type="button"
              id="birthDate"
              name="birthDate"
              popoverTarget="rdp-popover"
              className="no-border justify-center"
              style={{ anchorName: "--rdp" } as React.CSSProperties}
            >
              {birthDate ? (
                birthDate.toLocaleDateString("en-GB", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              ) : (
                <p className="disabled-text">Birth date...</p>
              )}
            </button>
            <div
              popover="auto"
              id="rdp-popover"
              className="dropdown"
              style={{ positionAnchor: "--rdp" } as React.CSSProperties}
            >
              <DayPicker
                className="react-day-picker"
                mode="single"
                captionLayout="dropdown"
                startMonth={new Date(1900, 0)}
                selected={birthDate}
                onSelect={setBirthDate}
              />
            </div>
          </span>
        </div>
        <button
          type="submit"
          className="ml-7 absolute bottom-14 white-bg-fat-border w-52 h-14 text-center justify-center"
        >
          <span className="button-text">Register</span>
        </button>
      </form>
    </div>
  );
}
