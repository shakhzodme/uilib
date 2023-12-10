import cn from "@/utils/cn";
import React from "react";
import { General } from "untitledui-js";

const FaqItem: React.FC<{
  icon?: boolean;
  iconPosition?: "left" | "right";
  title: string;
  content: React.ReactNode;
  divider?: boolean;
  expanded?: boolean;
  onExpand?: (expanded: boolean) => void;
}> = ({
  icon = false,
  iconPosition = "left",
  title,
  content,
  divider = false,
  expanded = false,
  onExpand,
}) => {
  const [value, setValue] = React.useState(expanded);

  React.useEffect(() => {
    if (onExpand) {
      onExpand(value);
    }
  }, [value, onExpand]);

  React.useEffect(() => {
    if (value != expanded) {
      setValue(expanded);
    }
  }, [expanded]);

  return (
    <div
      className={cn("flex gap-4 xl:gap-6 py-6", {
        "border-t border-secondary": divider,
        "flex-row-reverse": iconPosition == "right",
      })}
    >
      {icon && (
        <div
          className="text-fg-quinary pt-px shrink-0 cursor-pointer"
          onClick={() => setValue(!value)}
        >
          {value ? (
            <General.MinusCircle stroke="currentColor" />
          ) : (
            <General.PlusCircle stroke="currentColor" />
          )}
        </div>
      )}
      <div className="flex-1">
        <p
          className="text-lg font-medium mb-2 cursor-pointer"
          onClick={() => setValue(!value)}
        >
          {title}
        </p>
        {value && <div className="text-md text-tertiary">{content}</div>}
      </div>
    </div>
  );
};

export default FaqItem;
