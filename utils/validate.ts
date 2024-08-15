import z from "zod";

export const validateLogin = z.object({
  email: z.coerce.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 characters" }),
});

export const validateSignup = z
  .object({
    email: z.coerce.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must contain at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must contain at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
