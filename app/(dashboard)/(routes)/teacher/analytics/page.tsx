import { getAnalytics } from "@/actions/get-analytics";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const AnalyticsPage = async () => {
  try {
    const { userId } = auth();

    if (!userId) {
      return redirect("/");
    }

    const {
      data,
      totalRevenue,
      totalSales,
    } = await getAnalytics(userId);

    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <DataCard />
        </div>
      </div>
    )

  } catch(error) {
    console.log("[ANALYTUCS_PAGE]", error);
  }
};

export default AnalyticsPage;