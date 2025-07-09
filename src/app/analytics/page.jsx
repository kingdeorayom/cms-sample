import { ChartAreaInteractive } from "@/components/dashboard/chart-area-interactive";
import Dashboard from "@/components/dashboard/dashboard";
import { SiteHeader } from "@/components/dashboard/site-header";

export default function AnalyticsPage() {
  return (
    <Dashboard>
      <SiteHeader title="Analytics" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            {/* <SectionCards /> */}
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            {/* <DataTable data={data} /> */}
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
