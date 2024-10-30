import { LayoutList, Newspaper } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ViewToggleProps {
  view: "card" | "summary";
  onViewChange: (view: "card" | "summary") => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ view, onViewChange }) => {
  return (
    <ToggleGroup type="single" value={view} onValueChange={(value) => value && onViewChange(value as "card" | "summary")}>
      <ToggleGroupItem value="card" aria-label="Card View">
        <LayoutList className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="summary" aria-label="Summary View">
        <Newspaper className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};