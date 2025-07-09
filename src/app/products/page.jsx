"use client";

import Dashboard from "@/components/dashboard/dashboard";
import { SiteHeader } from "@/components/dashboard/site-header";
import NoAccess from "@/components/NoAccess";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useAccountStore } from "@/store/useAccountStore";

import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const accountType = useAccountStore((state) => state.accountType);

  return (
    <Dashboard>
      <SiteHeader title="Manage Products" />
      {accountType === "admin" || accountType === "marketing" ? (
        <>
          <div className="p-5 my-5 flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Add, edit or delete products</h1>
            <p>
              Manage products with ease. Create new products, update their
              information, or remove them entirely from the system.
            </p>
            <Link href="/products/add">
              <Button asChild>
                <span className="text-sm">Add Product</span>
              </Button>
            </Link>
          </div>
          <Separator />
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Button variant="link">Edit</Button>
                    <Button variant="link">Delete</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="link">Edit</Button>
                  <Button variant="link">Delete</Button>
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Button variant="link">Edit</Button>
                    <Button variant="link">Delete</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="link">Edit</Button>
                  <Button variant="link">Delete</Button>
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Button variant="link">Edit</Button>
                    <Button variant="link">Delete</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="link">Edit</Button>
                  <Button variant="link">Delete</Button>
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Button variant="link">Edit</Button>
                    <Button variant="link">Delete</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="link">Edit</Button>
                  <Button variant="link">Delete</Button>
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Button variant="link">Edit</Button>
                    <Button variant="link">Delete</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="link">Edit</Button>
                  <Button variant="link">Delete</Button>
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Button variant="link">Edit</Button>
                    <Button variant="link">Delete</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="link">Edit</Button>
                  <Button variant="link">Delete</Button>
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Button variant="link">Edit</Button>
                    <Button variant="link">Delete</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="link">Edit</Button>
                  <Button variant="link">Delete</Button>
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Button variant="link">Edit</Button>
                    <Button variant="link">Delete</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="link">Edit</Button>
                  <Button variant="link">Delete</Button>
                </CardFooter> */}
              </Card>
            </div>
          </div>
        </>
      ) : (
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <NoAccess />
          </div>
        </div>
      )}
    </Dashboard>
  );
}
