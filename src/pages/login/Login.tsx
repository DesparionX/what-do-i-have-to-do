import { useState, type FormEvent } from "react";
import { useAuth } from "../../hooks/services-hooks/AuthHooks";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { KeyIcon, UserIcon } from "@heroicons/react/24/outline";

export default function LogIn() {
  const { logInAsync } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function submitLogIn(e: FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      throw new Error("Invalid credentials.");
    }

    logInAsync(email, password, rememberMe);
  }

  return (
    <div className="page mt-12">
      <form
        id="login-form"
        className="flex flex-col flex-wrap justify-center items-center gap-10"
        onSubmit={submitLogIn}
      >
        <div className="white-bg-fat-border ml-7 mt-20 gap-5 items-center pt-6 pb-8 px-12">
          <span className="relative flex flex-row items-center gap-2 h-10 w-52 bottom-border-1">
            <UserIcon className="w-5 h-5 shrink-0 left-2 opacity-80" />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email..."
              className="no-border justify-center"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          <span className="relative flex flex-row items-center gap-2 h-10 w-52 bottom-border-1">
            <KeyIcon className="w-5 h-5 shrink-0 left-2 opacity-80" />
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
              onPointerDown={() => {
                setShowPassword(true);
              }}
              onPointerUp={() => setShowPassword(false)}
              className="w-5 h-5 shrink-0 absolute right-2"
            >
              {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
            </button>
          </span>
          <div className="flex flex-row gap-3">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              className="checkbox checkbox-md my-auto"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me ?</label>
          </div>
        </div>
        <button
          type="submit"
          className="ml-7 absolute bottom-14 white-bg-fat-border w-52 h-14 text-center justify-center"
        >
          <span className="button-text">Log In</span>
        </button>
      </form>
    </div>
  );
}
