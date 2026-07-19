import SettingsForm from "./SettingsForm";

// Replace with your real data fetch (DB query, session lookup, etc.)
async function getCurrentUser() {
  return {
    fullName: "Nusaiba Rafiq Surovi",
    username: "nusaiba",
    email: "nusaiba@example.com",
    bio: "",
    emailNotifications: true,
  };
}

export const metadata = {
  title: "Account settings",
};

export default async function SettingsPage() {
  const user = await getCurrentUser();

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-6 text-2xl font-semibold text-gray-900">
        Account settings
      </h1>
      <SettingsForm initialValues={user} />
    </main>
  );
}