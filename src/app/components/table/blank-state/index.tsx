import React from "react";

const BlankState: React.FC<{
  caption?: string;
  children?: React.ReactNode;
}> = ({ caption, children }) => {
  return (
    <tbody className="absolute bg-white/75  left-0 w-full h-full top-0 flex items-center justify-center">
      <tr>
        <td>
          {children}
          <p className="font-semibold bg-white p-2 m-2">{caption}</p>
        </td>
      </tr>
    </tbody>
  );
};

export default BlankState;
