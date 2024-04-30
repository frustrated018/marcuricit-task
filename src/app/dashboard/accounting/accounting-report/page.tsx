import Report from "@/components/custom/Report";

const AccountingReportePage = () => {
  return (
    <div className="bg-secondary min-h-screen p-5">
      <Report
        input1="Accountant"
        input2="Audit"
        input3="Type"
        reportName="Accounting"
      />
    </div>
  );
};

export default AccountingReportePage;
