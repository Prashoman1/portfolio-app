import { cn } from "../../lib/utils";
import React from 'react';
export function Textarea({ className, ...props }) {
    return (
      <textarea
        className={cn(
          "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
          className
        )}
        {...props}
      ></textarea>
    );
  }