import React from "react";
import { TextInput, PasswordInput, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTheme } from "../../contexts/themeContext";
import { signUpPayload } from "../../types/auth";
import { useAppDispatch } from "../../redux";
import { signUp } from "../../redux/api-thunk/user";

const SignupForm: React.FC = () => {
  const { isDark } = useTheme();
  const dispatch = useAppDispatch();
  const form = useForm<signUpPayload>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      firstName: (value) => (value.length >= 3 ? null : "Minimum 3 characters"),
      lastName: (value) => (value.length >= 3 ? null : "Minimum 3 characters"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length >= 8 ? null : "Minimum 8 characters"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleFormSubmit = (payload: signUpPayload) => {
    dispatch(signUp(payload));
  };

  return (
    <div>
      <Box
        component="form"
        onSubmit={form.onSubmit((values) => handleFormSubmit(values))}
      >
        <TextInput
          className={`${
            isDark ? "dark-custom-text-input" : "light-custom-text-input"
          }`}
          label="First Name"
          placeholder="e.g; John"
          withAsterisk
          {...form.getInputProps("firstName")}
        />
        <TextInput
          className={`${
            isDark ? "dark-custom-text-input" : "light-custom-text-input"
          }`}
          label="Last Name"
          placeholder="Doe"
          withAsterisk
          mt="md"
          {...form.getInputProps("lastName")}
        />
        <TextInput
          className={`${
            isDark ? "dark-custom-text-input" : "light-custom-text-input"
          }`}
          label="Email"
          placeholder="myemail@email.com"
          withAsterisk
          mt="md"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          className={`${
            isDark ? "dark-custom-text-input" : "light-custom-text-input"
          }`}
          label="Password"
          placeholder="password"
          withAsterisk
          mt="md"
          {...form.getInputProps("password")}
        />

        <PasswordInput
          className={`${
            isDark ? "dark-custom-text-input" : "light-custom-text-input"
          }`}
          label="Confirm Password"
          placeholder="password"
          withAsterisk
          mt="md"
          {...form.getInputProps("confirmPassword")}
        />

        <div className="mt-4">
          <button
            className={`${isDark ? "btn-bg-white" : "btn-primary-light"}`}
            type="submit"
          >
            Create Account
          </button>
        </div>
      </Box>
    </div>
  );
};

export default SignupForm;
