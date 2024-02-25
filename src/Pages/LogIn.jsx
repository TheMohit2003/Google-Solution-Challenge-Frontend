import React, { useEffect, useState } from "react";
import Navbar from "../Components/LandingPage/Navbar";
import { login } from "../store/actions/loginActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useToast } from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  // localStorage.setItem("role");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Dispatch the login action
      const response = await dispatch(login({ email, password, role }, navigate));
      console.log("Response:", response);
      // Check if the login was successful based on the response
      if (response?.token) {
        // Login successful
        toast({
          title: 'Login Successful',
          status: 'success',
          position: 'top',
          duration: 3000,
          isClosable: true,
          
        });

        // Redirect based on role
        if (role === "VENDOR") {
          navigate("/vendor-dashboard");
        } else if (role === "ISSUER") {
          navigate("/issuer-dashboard");
        }
      } else {
        // Login failed
        toast({
          title: 'Login Failed',
          description: response?.message || 'An error occurred during login.',
          status: 'error',
          position: 'top',
          duration: 3000,
          isClosable: true,
          variant: 'solid',
          colorScheme: 'red',
        });
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error('Login error:', error);
      toast({
        title: 'An error occurred',
        description: 'Please try again later.',
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
        variant: 'solid',
        colorScheme: 'red',
      });
    }

    setLoading(false);

    console.log("Email:", email, "Password:", password, "Role:", role);
  };

  useEffect(() => {
    // Set the role in sessionStorage
    sessionStorage.setItem("role", role);
    console.log("Role:", role);
  }, [role]);

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Welcome back</h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Unlock access to seamless project collaboration by logging in now
          </p>

          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            onSubmit={handleSubmit}
          >
            <p className="text-center text-lg font-medium">
              Log in to your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <select onChange={e => setrole(e.target.value)} className="block w-full rounded-lg border px-5 py-3 shadow-sm text-sm font-medium text-gray-500">
                <option value="">Select Role</option>
                <option value="ISSUER">Issuer</option>
                <option value="VENDOR">Vendor</option>
              </select>
            </div>

            {/* Always show the "Sign Up" button */}
            <div>
              <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Log in

              </button>
              <div className="flex justify-center pt-3">
                <ClipLoader
                  color="blue"
                  loading={loading}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  className="text-center flex justify-center items-center w-full h-full"
                />
              </div>
            </div>

            <p className="text-center text-sm text-gray-500">
              No account?{" "}
              <a className="underline" href="/sign-up">Register</a>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
}


