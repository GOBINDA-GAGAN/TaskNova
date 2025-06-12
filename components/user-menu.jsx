"use client";

import { UserButton } from "@clerk/nextjs";
import { ChartBar } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-4">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer scale-150"
      >
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-16 w-16",
              avatarImage: "h-16 w-16",
            },
          }}
        />
      </div>

      
    </div>
  );
};

export default UserMenu;
