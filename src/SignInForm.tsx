"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import type { FormEvent } from "react";
import { useState } from "react";
import { toast } from "sonner";

export function SignInForm() {
  const { signIn } = useAuthActions();
  const [submitting, setSubmitting] = useState(false);
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const formData = new FormData(event.currentTarget);
    formData.set("flow", flow);

    void signIn("password", formData)
      .catch((error: unknown) => {
        if (
          error instanceof Error &&
          error.message.includes("Invalid password") &&
          flow === "signIn"
        ) {
          toast.error("Invalid password. Please try again.");
          return;
        }

        const message =
          flow === "signUp"
            ? "Could not create account. Contact an admin if this persists."
            : "Could not sign in. Contact an admin to request access.";
        toast.error(message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const toggleFlow = () => {
    setFlow((prev) => (prev === "signIn" ? "signUp" : "signIn"));
  };

  return (
    <div className="w-full space-y-3">
      <form className="flex flex-col gap-form-field" onSubmit={handleSubmit}>
        <input
          className="auth-input-field hover:shadow-md focus:border-primary focus:ring-1 focus:ring-primary"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="auth-input-field hover:shadow-md focus:border-primary focus:ring-1 focus:ring-primary"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button
          className="auth-button hover:bg-primary-hover hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={submitting}
        >
          {flow === "signUp" ? "Create account" : "Sign in"}
        </button>
      </form>
      <button
        type="button"
        className="text-sm text-primary underline underline-offset-4 hover:text-primary-hover"
        onClick={toggleFlow}
        disabled={submitting}
      >
        {flow === "signUp"
          ? "Have an account? Sign in"
          : "Need access? Create an account"}
      </button>
    </div>
  );
}
