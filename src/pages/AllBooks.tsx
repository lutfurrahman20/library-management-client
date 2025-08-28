/* eslint-disable @typescript-eslint/no-unused-vars */
import Loader from "@/components/ui/Loader";
import {
  useDeleteBookMutation,
  useGetAllBooksQuery,
} from "@/redux/api/bookApi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import EditBooks from "@/components/AllBooks/EditBooks";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { ShowBooks } from "@/components/AllBooks/BookDetails";
interface ApiResponse<T> {
  data: T;
}
interface IBook {
  _id: string;
  title: string;
  author: string;
  genre?: string;
  isbn?: string;
  copies?: number;
  available?: boolean;
}

const AllBooks = () => {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined) as {
    data: ApiResponse<IBook[]>;
    isLoading: boolean;
    isError: boolean;
  };

  const [deleteBook] = useDeleteBookMutation();

  if (isLoading) return <Loader />;
  if (isError) return <div className="text-red-500">Failed to load books.</div>;

  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Books</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2">SI</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Author</th>
              <th className="border border-gray-300 px-4 py-2">Genre</th>
              <th className="border border-gray-300 px-4 py-2">ISBN</th>
              <th className="border border-gray-300 px-4 py-2">Copies</th>
              <th className="border border-gray-300 px-4 py-2">Available</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.data?.map((book, index) => (
              <tr key={book._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.author}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.genre ?? "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.isbn ?? "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.copies ?? "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {book.available ? (
                    <IoMdCheckmarkCircleOutline className="text-green-500 text-lg mx-auto" />
                  ) : (
                    <FaCircleXmark className="text-red-500 text-lg mx-auto" />
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <EditBooks bookId={book._id} />
                    <Dialog>
                      <DialogTrigger>
                        <Button
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Delete Book"
                          variant="destructive"
                        >
                          <MdDelete />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Are you absolutely sure?</DialogTitle>
                          <DialogDescription>
                            This action cannot be undone. This will permanently
                            delete this book from the system.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <Button
                              variant="destructive"
                              onClick={async () => {
                                try {
                                  await deleteBook(book._id).unwrap();
                                  toast.success("Book deleted successfully");
                                } catch (err) {
                                  toast.error("Failed to delete book");
                                }
                              }}
                            >
                              Confirm Delete
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <ShowBooks bookId={book._id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;