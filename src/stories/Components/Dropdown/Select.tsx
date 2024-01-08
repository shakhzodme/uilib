import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  Select as BaseSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectSeparator,
  SelectValue,
} from "./Base";

export interface SelectProps {
  placeholder?: string;
  className?: string;
  triggerProps?: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;
  contentProps?: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
  options:
    | ({
        type: "item";
      } & React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>)
    | ({ type: "label" } & React.ComponentPropsWithoutRef<
        typeof SelectPrimitive.Label
      >)
    | ({ type: "separator" } & React.ComponentPropsWithoutRef<
        typeof SelectPrimitive.Separator
      >)[];
}

const Select: React.FC<SelectProps> = ({
  className,
  placeholder,
  options,
  triggerProps = {},
  contentProps = {},
}) => {
  return (
    <BaseSelect>
      <SelectTrigger {...triggerProps} className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent {...contentProps}>
        <SelectGroup>
          {options.map((option, index) => {
            if (option.type == "item") {
              return <SelectItem {...option} key={index} />;
            } else if (option.type == "label") {
              return <SelectLabel {...option} key={index} />;
            } else if (option.type == "separator") {
              return <SelectSeparator {...option} key={index} />;
            }

            return <></>;
          })}
        </SelectGroup>
      </SelectContent>
    </BaseSelect>
  );
};

export default Select;
