import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/(?=.*\d)/, "Password must contain at least one number")
      .regex(/(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
      .regex(/(?=.*[!@#$%^&*])/, "Password must contain at least one special character"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
    role: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"], 
  });


  export const loginSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  export const expenseSchema = z.object({
    title: z.string().min(1, "Title is required"),
    type: z.enum(["income", "expense"], "Type must be either 'income' or 'expense'"),
    amount: z.number().positive("Amount must be a positive number"),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    category: z.string().min(1, "Category is required"),
  });