import { ChartAreaInteractive } from "@/components/dashboard/chart-area-interactive";
import Dashboard from "@/components/dashboard/dashboard";
import { DataTable } from "@/components/dashboard/data-table";
import { SectionCards } from "@/components/dashboard/section-cards";
import { SiteHeader } from "@/components/dashboard/site-header";
import data from "../../components/dashboard/data.json";

export default function DashboardPage() {
  return (
    <Dashboard>
      <SiteHeader title="Overview" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            {/* <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div> */}
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
