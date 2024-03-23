"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex-center h-[50vh]">
      <h2 className="text-3xl font-bold text-rose-600">Category Not Found!</h2>
    </div>
  );
}
