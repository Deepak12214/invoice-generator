import React from "react";

const CollectionAmountTable = () => {
  const collectionData = [
    {
      TaxInterestArrear: "₹200",
      TaxArrearAmount: "₹150",
      InterestArrear: "₹100",
      MeteredEnergyCharge: "₹1100",
      SubmetereEnergyCharge: "₹90",
      FACArear: "₹50",
      AdjustmentArrear: "₹300",
      EnergyCharge: "₹1200",
      Interest: "₹200",
      FAC: "₹100",
      Tax: "₹50",
      FixedCharges: "₹500",
      PenaltyAmount: "View",
      AdjustmentAmount: "View",
      OtherAdjustment: "₹80",
      Total: "₹9000",
      FixedChargeArrear: "₹300",
      TaxInterest: "₹120",
      RevenueInterest: "₹50",
      CollectionAmount: "₹4500",
      PenaltyArrear: "₹150",
      CurrentMonthInterest: "₹70",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Collection Amount Details</h2>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {[
                "TaxInterestArrear",
                "TaxArrearAmount",
                "InterestArrear",
                "MeteredEnergyCharge",
                "SubmetereEnergyCharge",
                "FACArear",
                "AdjustmentArrear",
                "EnergyCharge",
                "Interest",
                "FAC",
                "Tax",
                "FixedCharges",
                "PenaltyAmount",
                "AdjustmentAmount",
                "OtherAdjustment",
                "Total",
                "FixedChargeArrear",
                "TaxInterest",
                "RevenueInterest",
                "CollectionAmount",
                "PenaltyArrear",
                "CurrentMonthInterest",
              ].map((header) => (
                <th key={header} className="border p-3 text-xs whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {collectionData.map((row, index) => (
              <tr key={index} className="border">
                {Object.entries(row).map(([key, value]) => (
                  <td key={key} className="border p-3 text-xs whitespace-nowrap">
                    {value === "View" ? (
                      <button className="text-blue-500 underline">{value}</button>
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollectionAmountTable;
