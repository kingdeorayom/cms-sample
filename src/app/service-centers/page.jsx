import Dashboard from "@/components/dashboard/dashboard";
import { SiteHeader } from "@/components/dashboard/site-header";

export default function ServiceCentersPage() {
  return (
    <Dashboard>
      <SiteHeader title="Service Centers" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6"></div>
        </div>
      </div>
    </Dashboard>
  );
}
