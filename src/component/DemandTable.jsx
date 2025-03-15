import React from "react";

const DemandTable = () => {
  const demandData = [
    {
      Demand: "₹5000",
      TaxInterestArrear: "₹200",
      TaxArrearAmount: "₹150",
      InterestArrear: "₹100",
      ECArrears: "₹800",
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
      GOKSchemeEligibleAmount: "View",
      OtherIncentiveAmount: "₹100",
      RebateAmount: "View",
      Total: "₹9000",
      FixedChargeArrear: "₹300",
      MeteredEnergyCharge: "₹1100",
      SubmetereEnergyCharge: "₹90",
      TaxInterest: "₹120",
      RevenueInterest: "₹50",
      CollectionAmount: "₹4500",
      FCChargesArear: "₹250",
      CustomerDLDemandECWithdrawal: "₹60",
      CustomerDLDemandTaxWithdrawal: "₹30",
      GOKDLDemandECWithdrwal: "₹40",
      GOKDLDemandTaxWithdrwal: "₹20",
      PenaltyArrear: "₹150",
      RevenueInterestArrear: "₹80",
      CurrentMonthInterest: "₹70",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg min-h-screen p-4  overflow-x-scroll">
      <h2 className="text-2xl font-bold mb-4">Demand Details</h2>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 ">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {[
                "Demand",
                "TaxInterestArrear",
                "TaxArrearAmount",
                "InterestArrear",
                "ECArrears",
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
                "GOKSchemeEligibleAmount",
                "OtherIncentiveAmount",
                "RebateAmount",
                "Total",
                "FixedChargeArrear",
                "MeteredEnergyCharge",
                "SubmetereEnergyCharge",
                "TaxInterest",
                "RevenueInterest",
                "CollectionAmount",
                "FCChargesArear",
                "CustomerDLDemandECWithdrawal",
                "CustomerDLDemandTaxWithdrawal",
                "GOKDLDemandECWithdrwal",
                "GOKDLDemandTaxWithdrwal",
                "PenaltyArrear",
                "RevenueInterestArrear",
                "CurrentMonthInterest",
              ].map((header) => (
                <th key={header} className="border p-3 text-xs whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {demandData.map((row, index) => (
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

export default DemandTable;
