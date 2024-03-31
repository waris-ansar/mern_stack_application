import React from "react";
import { TextInput, PasswordInput, Box, Loader } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTheme } from "../../contexts/themeContext";
import { signInPayload } from "../../types/auth";
import { useAppDispatch, useAppSelector } from "../../redux";
import { signIn } from "../../redux/api-thunk/user";

const LoginForm: React.FC = () => {
  const { isDark } = useTheme();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.user);
  const form = useForm<signInPayload>({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleFormSubmit = (payload: signInPayload) => {
    dispatch(signIn(payload));
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

        <div className="mt-4">
          <button
            className={`${isDark ? "btn-bg-white" : "btn-primary-light"}`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading && (
              <Loader
                size={18}
                color={`${isDark ? "#fff" : "0b002c"}`}
                className="mr-3"
              />
            )}
            Login
          </button>
        </div>
      </Box>
    </div>
  );
};

export default LoginForm;
