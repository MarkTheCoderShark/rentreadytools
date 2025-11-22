import { redirect } from "next/navigation";

export default function MakeReadyAuditRedirect() {
  redirect("/tools/move-in-checklist");
}
