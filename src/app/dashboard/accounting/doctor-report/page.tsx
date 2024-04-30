import Report from "@/components/custom/Report";

const DoctorReportPage = () => {
  return (
    <div className="bg-secondary min-h-screen p-5">
      <Report
        input1="Doctors"
        input2="Type"
        input3="Culture"
        reportName="Doctor"
      />
    </div>
  );
};

export default DoctorReportPage;
