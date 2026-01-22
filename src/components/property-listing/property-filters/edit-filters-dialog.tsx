import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FilterForm } from "@/components/ui/manual-filter-form";

interface EditFiltersDialogProps {
  readonly open: boolean;
  // 1. Add this prop so the parent knows when to close
  readonly onOpenChange: (open: boolean) => void; 
}

export function EditFiltersDialog({ open, onOpenChange }: EditFiltersDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="sm:max-w-171.5 w-full">
        <DialogHeader>
          <DialogTitle>Edit Filters</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 overflow-y-auto max-h-96">
          <FilterForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}