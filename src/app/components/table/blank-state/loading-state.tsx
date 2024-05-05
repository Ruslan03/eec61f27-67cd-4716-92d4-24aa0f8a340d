import React from "react";
import LoaderIcon from "../../icons/loader";
import BlankState from ".";

const LoadingState: React.FC = () => {
  return (
    <BlankState>
      <div className="p-2 bg-white shadow-md rounded-full ">
        <LoaderIcon
          className="animate-spin fill-blue-700"
          width={32}
          height={32}
        />
      </div>
    </BlankState>
  );
};

export default LoadingState;
