import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaBitcoin } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Hello from Next.js!</h1>
      <Button 
        as={Link}
        href="/members"
        startContent={<FaBitcoin size={20} />} 
        size="sm" 
        color="warning"
      >
        Go to members
      </Button>
    </div>
  );
}
