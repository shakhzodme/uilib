import React from "react";
import { NavigationWithTrigger } from "../types";
import FeaturedCardTrigger from "../Triggers/FeaturedCardTrigger/FeaturedCardTrigger";
import { Arrow } from "untitledui-js";
import cn from "@/utils/cn";
import {
  autoUpdate,
  useFloating,
  offset,
  shift,
  useInteractions,
  useClick,
  useDismiss,
} from "@floating-ui/react";
import SimpleTrigger from "../Triggers/SimpleTrigger/SimpleTrigger";

const NavigationItem: React.FC<NavigationWithTrigger> = ({
  label,
  href,
  trigger,
}) => {
  const [show, setShow] = React.useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: show,
    onOpenChange: setShow,
    middleware: [offset(16), shift({ padding: 16 })],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  // TODO: framer-motion animate this dropdown

  return (
    <div className="relative inline-flex">
      <div
        className="inline-flex text-button-tertiary-fg cursor-pointer"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <a href={trigger ? undefined : href} className="text-md font-semibold">
          {label}
        </a>
        {trigger && (
          <div className="ml-2">
            <Arrow.ChevronDown
              className={cn("transition-all", {
                "rotate-180": show,
              })}
              stroke="currentColor"
            />
          </div>
        )}
      </div>

      {trigger && show && (
        <div
          className={cn(
            "inline-flex rounded-xl border border-secondary shadow-lg transition-all overflow-hidden bg-primary",
          )}
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {trigger.name == "simple" && <SimpleTrigger trigger={trigger} />}
          {trigger.name == "featured-card" && (
            <FeaturedCardTrigger trigger={trigger} />
          )}
        </div>
      )}
    </div>
  );
};

export default NavigationItem;
