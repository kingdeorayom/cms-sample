"use client";

import Dashboard from "@/components/dashboard/dashboard";
import { SiteHeader } from "@/components/dashboard/site-header";
import NoAccess from "@/components/NoAccess";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { useAccountStore } from "@/store/useAccountStore";
import { ArrowLeft } from "lucide-react";

export default function AddProductsPage() {
  const accountType = useAccountStore((state) => state.accountType);

  return (
    <Dashboard>
      <SiteHeader title="Manage Products" />
      {accountType === "admin" || accountType === "marketing" ? (
        <>
          <div className="p-5 my-5 flex flex-col space-y-4">
            <Button
              size="icon"
              variant="outline"
              onClick={() => window.history.back()}
            >
              <ArrowLeft />
            </Button>
            <h1 className="text-2xl font-bold">Add a new product</h1>
          </div>
          <div className="@container/main flex flex-1 flex-col gap-2 p-5">
            <div className="flex items-center space-x-4">
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label>Product Name</Label>
                <Input />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label>SKU</Label>
                <Input />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label>Model</Label>
                <Input />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label>Size</Label>
                <Input />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label>Resolution</Label>
                <Input />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label>Warranty</Label>
                <Input />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label>Zoom</Label>
                <Input />
              </div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label>Wifi</Label>
                <Input />
              </div>
            </div>
            <div>
              <div className="grid w-full items-center gap-3">
                <Label>Product Description</Label>
                <Textarea />
              </div>
            </div>
            <div>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="picture">Product Image</Label>
                <Input id="picture" type="file" />
              </div>
            </div>
            <div className="space-x-2 pt-8">
              <Button size="lg">Save</Button>
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
