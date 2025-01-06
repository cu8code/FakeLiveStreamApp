"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
    { month: "January", issuesFound: 210, resolved: 110 },
    { month: "February", issuesFound: 345, resolved: 220 },
    { month: "March", issuesFound: 198, resolved: 120 },
    { month: "April", issuesFound: 275, resolved: 165 },
    { month: "May", issuesFound: 330, resolved: 300 },
    { month: "June", issuesFound: 260, resolved: 180 },
    { month: "July", issuesFound: 190, resolved: 150 },
    { month: "August", issuesFound: 225, resolved: 180 },
    { month: "September", issuesFound: 290, resolved: 250 },
    { month: "October", issuesFound: 315, resolved: 270 },
    { month: "November", issuesFound: 240, resolved: 200 },
    { month: "December", issuesFound: 280, resolved: 250 },
];

const chartConfig = {
    issuesFound: {
        label: "Issues Found",
        color: "#2563eb",
    },
    resolved: {
        label: "Resolved",
        color: "#60a5fa",
    }
} satisfies ChartConfig

export function HeroGraph() {
    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] max-h-[300px] w-full">
            <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                    dataKey="issuesFound"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}

                />
                <Bar dataKey="issuesFound" fill="#e92195"  radius={4} />
                <Bar dataKey="resolved" fill="#ffaaaa" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}
