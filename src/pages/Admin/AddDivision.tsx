import DeleteConfirmation from "@/components/DeleteConfirmation";
import { AddDivisionModal } from "@/components/modules/Admin/Division/AddDivisionModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetDivisionsQuery,
  useRemoveDivisionMutation,
} from "@/redux/features/division/division.api";
import type { IDivision } from "@/types";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

const AddDivision = () => {
  const { data } = useGetDivisionsQuery(undefined);
  const [removeDivision] = useRemoveDivisionMutation();

  // remove division
  const handleRemoveDivision = async (divisionId: string) => {
    const toastId = toast.loading("Removing division...");
    try {
      const res = await removeDivision(divisionId).unwrap();
      if (res.success) {
        toast.success("Division Removed", { id: toastId });
      }
    } catch (err) {
      toast.error("Error removing division", { id: toastId });
      console.log(err);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">Divisions</h1>
        <AddDivisionModal />
      </div>
      <div className="border border-muted rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Image</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: IDivision) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium w-full">
                  {item?.name}
                </TableCell>
                <TableCell>
                  {item?.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="h-10 w-10 object-contain rounded"
                    />
                  ) : (
                    <span className="text-gray-400">No image</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DeleteConfirmation
                    onConfirm={() => handleRemoveDivision(item._id)}
                    itemType="division"
                  >
                    <Button size="sm" variant="destructive">
                      <Trash2 />
                    </Button>
                  </DeleteConfirmation>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AddDivision;
