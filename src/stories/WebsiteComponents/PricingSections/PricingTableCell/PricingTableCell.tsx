import React from 'react';
import { General } from 'untitledui-js';
import cn from '@/utils/cn';

const PricingTableCell: React.FC<{
  className?: string;
  title: string;
}> = ({ className, title }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <General.CheckCircle size="20" stroke="currentColor" className="inline-block" />
      <p className="text-tertiary text-sm">{title}</p>
    </div>
  );
};

{
}
export default PricingTableCell;
