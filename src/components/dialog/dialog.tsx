import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  isOpen: boolean;
  handleSubmit: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Dialogs({ isOpen, handleSubmit, setOpen }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            event and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"destructive"} onClick={handleSubmit}>
              Delete
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant={"ghost"}>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Dialogs;
