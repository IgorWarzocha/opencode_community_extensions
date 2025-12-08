"use client";

import { SignInForm } from "../SignInForm";
import { SignOutButton } from "../SignOutButton";

export function AdminLoginPage() {
  return (
    <div className="max-w-md mx-auto px-6 py-12">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Admin Access</h1>
          <p className="text-secondary dark:text-secondary-dark">
            Restricted to admins and moderators. Use your issued credentials.
          </p>
        </div>
        <SignInForm />
        <div className="flex justify-end">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
