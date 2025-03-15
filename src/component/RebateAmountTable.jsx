import React from "react";

const RebateAmountTable = () => {
  const rebateData = [
    {
      RebateCode: "REB001",
      ConnectionID: "CON5678",
      RRNo: "RR9876",
      TarrifTypeId: "TAR789",
      NumberOfUnits: 50,
      RebateAmount: "₹200",
      CreatedOn: "2025-03-10",
    },
    {
      RebateCode: "REB002",
      ConnectionID: "CON9876",
      RRNo: "RR1234",
      TarrifTypeId: "TAR456",
      NumberOfUnits: 75,
      RebateAmount: "₹300",
      CreatedOn: "2025-03-12",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Rebate Amount Details</h2>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {[
                "RebateCode",
                "ConnectionID",
                "RRNo",
                "TarrifTypeId",
                "NumberOfUnits",
                "RebateAmount",
                "CreatedOn",
              ].map((header) => (
                <th key={header} className="border p-3 text-xs whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rebateData.map((row, index) => (
              <tr key={index} className="border">
                {Object.entries(row).map(([key, value]) => (
                  <td key={key} className="border p-3 text-xs whitespace-nowrap">
                    {key === "RebateCode" ? (
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

export default RebateAmountTable;
