/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "@/components/ui/Loader";
import { useGetBorrowQuery } from "@/redux/api/bookApi";

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  const borrow = data?.data;

  if (!borrow || borrow.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No borrowed books found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Borrow Summary
      </h2>
      <div className="space-y-4">
        {borrow.map((item: any, i: number) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
          >
            <p className="text-sm text-gray-500">
              Quantity: {item.totalQuantity}
            </p>
            <p className="text-lg font-medium">Title: {item.book?.title}</p>
            <p className="text-sm text-gray-600">ISBN: {item.book?.isbn}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowSummary;
