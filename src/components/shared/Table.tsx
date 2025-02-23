/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from "react";
import { TTableHeader } from "../../types";



interface TableProps {
  children: React.ReactNode;
  data: any[];
}

const Table = ({ children, data }: TableProps) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              {data.map((item: TTableHeader, index: number) => (
                <th key={index}>{item?.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
