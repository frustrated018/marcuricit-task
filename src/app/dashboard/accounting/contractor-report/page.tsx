import Report from "@/components/custom/Report";

const ContractorReportPage = () => {
  return (
    <div className="bg-secondary min-h-screen p-5">
      <Report
        reportName="Contractor"
        input1="Contractor"
        input2="Project"
        input3="Construction Type"
      />
    </div>
  );
};

export default ContractorReportPage;
