import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ScatteredDots from "../ScatteredDots";

const ComparisonTable = () => {
  return (
    <div className="relative p-6 max-w-7xl mx-auto font-poppins">
      <h2 className="text-2xl font-bold mb-4">Comparison Table</h2>
      <ScatteredDots />
      <Table className="w-full">
        <TableHeader>
          <TableRow className="[&>th]:py-4 [&>th]:px-6">
            <TableHead className="font-semibold text-red-500">
              Use Cases
            </TableHead>
            <TableHead className="font-semibold text-red-500">
              GCV Range
            </TableHead>
            <TableHead className="font-semibold text-red-500">
              Use Cases
            </TableHead>
            <TableHead className="font-semibold text-red-500">
              Moisture
            </TableHead>
            <TableHead className="font-semibold text-red-500">
              Packaging
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              type: "Thermal",
              gcv: "5800-6500 kcal",
              use: "Power, boilers",
              moisture: "5-10%",
              packaging: "Bulk, Bags",
            },
            {
              type: "Coking",
              gcv: "6200-7000 kcal",
              use: "Steel, metallurgy",
              moisture: "4-8%",
              packaging: "Bulk, Rail",
            },
            {
              type: "Anthracite",
              gcv: "7000+ kcal",
              use: "Furnaces, water filters",
              moisture: "<5%",
              packaging: "Bags, Retail",
            },
            {
              type: "Steam",
              gcv: "5000-5700 kcal",
              use: "Kilns, small industries",
              moisture: "10-15%",
              packaging: "Bulk",
            },
            {
              type: "Domestic/BBQ",
              gcv: "~6000 kcal",
              use: "Household, BBQ, small scale",
              moisture: "<10%",
              packaging: "5-25kg Bags",
            },
          ].map((row, idx) => (
            <TableRow key={idx} className="[&>td]:py-4 [&>td]:px-6">
              <TableCell className="font-medium">{row.type}</TableCell>
              <TableCell>{row.gcv}</TableCell>
              <TableCell>{row.use}</TableCell>
              <TableCell>{row.moisture}</TableCell>
              <TableCell>{row.packaging}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTable;
