import React, { useEffect } from "react";
import Link from "next/link";
function CleaningSupplies() {
  useEffect(() => {
    console.log("I am here!");
  });

  return (
    <div>
      <Link href="/CleaningSupplies">
        <p>CleaningSupplies</p>
      </Link>
    </div>
  );
}

export default CleaningSupplies;
