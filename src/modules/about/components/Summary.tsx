import { summaryMock } from "@/common/mocks/Summary";

export default function Summary() {
  return (
    <div className="mb-2 mt-4 text-sm border-t border-dashed pt-4 dark:text-gray-200">
      <p>{summaryMock.paragraphOne}</p>
    </div>
  );
}
