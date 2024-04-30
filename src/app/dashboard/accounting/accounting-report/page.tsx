import Report from "@/components/custom/Report";

const AccountingReportePage = () => {
  return (
    <div className="bg-secondary min-h-screen p-5">
      <Report
        reportName="Accounting"
        input1="Accountant"
        input2="Audit"
        input3="Type"
      />
    </div>
  );
};

export default AccountingReportePage;
