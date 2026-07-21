import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function OpsLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin_auth");

  if (auth?.value !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login?next=/ops/quotes");
  }

  return <>{children}</>;
}
