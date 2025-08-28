import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useGetSingleBookQuery } from "@/redux/api/bookApi";
import Loader from "@/components/ui/Loader";
import { DialogClose } from "@radix-ui/react-dialog";
import { BorrowBook } from "./BorrowBook";
import { TbListDetails } from "react-icons/tb";

export function ShowBooks({ bookId }: { bookId: string }) {
  const { data, isLoading, isError } = useGetSingleBookQuery(bookId);
  const book = data?.data;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Details"
          variant="outline"
        >
          <TbListDetails />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Book Details</DialogTitle>
          <DialogDescription>
            Here are the details of the selected book.
          </DialogDescription>
        </DialogHeader>

        {isLoading && <Loader />}
        {isError && (
          <p className="text-red-500 text-center">Failed to fetch book.</p>
        )}

        {book && (
          <div className="grid gap-4 text-sm">
            <div className="flex gap-2">
              <Label className="font-semibold">Title:</Label>
              <p>{book.title}</p>
            </div>
            <div className="flex gap-2">
              <Label className="font-semibold">Author:</Label>
              <p>{book.author}</p>
            </div>
            <div className="flex gap-2">
              <Label className="font-semibold">Genre:</Label>
              <p>{book.genre || "N/A"}</p>
            </div>
            <div className="flex gap-2">
              <Label className="font-semibold">ISBN:</Label>
              <p>{book.isbn || "N/A"}</p>
            </div>
            <div className="flex gap-2">
              <Label className="font-semibold">Copies:</Label>
              <p>{book.copies ?? 0}</p>
            </div>
            <div className="flex gap-2">
              <Label className="font-semibold">Available:</Label>
              <p>{book.available ? "Yes" : "No"}</p>
            </div>
          </div>
        )}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <BorrowBook bookId={bookId} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}