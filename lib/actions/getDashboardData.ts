import connectDB from "@/lib/db";
import  Lead  from "@/models/Lead";
import { Campaign } from "@/models/Campaign";

export async function getDashboardData() {
  try {
    await connectDB();

    // 1. Fetch Data in Parallel for Speed
    const [leads, campaigns, totalLeadsCount] = await Promise.all([
      Lead.find({}).sort({ createdAt: -1 }).limit(5), // Recent 5 leads
      Campaign.find({ active: true }).limit(3),
      Lead.countDocuments({}),
    ]);

    // 2. Calculate KPI: Pipeline (Example Logic)
    const pipelineStages = await Lead.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);

    // Format Pipeline for the UI
    const pipelineData = pipelineStages.map((stage) => ({
      label: stage._id,
      value: stage.count,
    }));

    const newLeadsValue = totalLeadsCount.toString(); 

    return {
      kpiCards: [
        {
          label: "New Leads",
          value: newLeadsValue,
          change: "+18.4%",
          trend: "up",
          note: "All time total",
        },
        {
          label: "Qualified Opportunities",
          value: "68",
          change: "+9.2%",
          trend: "up",
          note: "Pipeline velocity",
        },
        {
          label: "Campaign ROI",
          value: "3.9x",
          change: "+0.6x",
          trend: "up",
          note: "Median across campaigns",
        },
        {
          label: "Client Retention",
          value: "96%",
          change: "+2.1%",
          trend: "up",
          note: "Last 90 days",
        },
      ],
      recentLeads: JSON.parse(JSON.stringify(leads)),
      pipeline: pipelineData,
      campaigns: JSON.parse(JSON.stringify(campaigns)),
    };
  } catch (error) {
    console.warn("Could not fetch dashboard data:", error);
    return {
      kpiCards: [
        { label: "New Leads", value: "0", change: "+0%", trend: "up", note: "All time total" },
        { label: "Qualified Opportunities", value: "0", change: "+0%", trend: "up", note: "Pipeline velocity" },
        { label: "Campaign ROI", value: "0x", change: "+0x", trend: "up", note: "Median across campaigns" },
        { label: "Client Retention", value: "100%", change: "+0%", trend: "up", note: "Last 90 days" },
      ],
      recentLeads: [],
      pipeline: [],
      campaigns: [],
    };
  }
}