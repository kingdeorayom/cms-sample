import React from "react";

const NoAccess = () => {
  return (
    <div className="p-4 lg:p-6 border border-dashed border-gray-300 mx-4 w-fit">
      <p>
        You don't have permission to access this section. Please contact your
        administrator to request access.
      </p>
    </div>
  );
};

export default NoAccess;
