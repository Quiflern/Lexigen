"use client";

import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";

// Functional component for rendering a chart displaying Gemini usage
export default function GeminiUsageChart({
  availableCredit,
  totalUsage,
}: {
  availableCredit: number;
  totalUsage: number;
}) {
  // Data used for rendering the bar chart
  const data = [
    {
      name: "Credit",
      Used: totalUsage,
      Available: availableCredit - totalUsage,
    },
  ];

  return (
    <Card className="w-full bg-aqua/15 text-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-md text-center font-medium">
          Usage Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl font-bold text-aqua">
            {/* Display the total usage and available credit */}
            {totalUsage.toLocaleString()}/{availableCredit.toLocaleString()}
          </div>
          <div className="text-sm text-aqua">Used / Available</div>
        </div>
        <div className="h-[5px] mt-4">
          {/* Responsive container to ensure the chart fits its parent */}
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" barSize={20}>
              <Tooltip
                content={({ payload }) => {
                  if (payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-charcoal p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            {/* Display the used and remaining credit in the tooltip */}
                            <span className="font-bold text-white">
                              {payload[0].value} / {payload[1].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            {/* Label for the tooltip values */}
                            <span className="text-[0.70rem] uppercase text-gray-400">
                              Used / Remaining
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              {/* Bar components for used and remaining credit */}
              <Bar dataKey="Used" stackId="a" fill="#4F46E5" />
              <Bar dataKey="Remaining" stackId="a" fill="#6B7280" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
