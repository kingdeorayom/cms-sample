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
import UsersTable from "@/components/UsersTable";
import { useAccountStore } from "@/store/useAccountStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

export default function UsersPage() {
  const accountType = useAccountStore((state) => state.accountType);

  return (
    <Dashboard>
      <SiteHeader title="Manage Users" />
      {accountType === "admin" ? (
        <>
          <div className="p-5 my-5 flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Add, edit or delete user</h1>
            <p>
              Manage user accounts with ease. Create new users, update their
              information, or remove them entirely from the system.
            </p>
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button>
                    <span className="text-sm">Add User</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add user</DialogTitle>
                    <DialogDescription>
                      Click save when you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name-1">Name</Label>
                      <Input id="name-1" name="name" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="Email-1">Email</Label>
                      <Input id="Email-1" name="Email" />
                    </div>
                    <div>
                      <div className="mb-4">
                        <Label htmlFor="Email-1">Account Type</Label>
                      </div>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select account type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="apple">IT</SelectItem>
                            <SelectItem value="banana">Service</SelectItem>
                            <SelectItem value="blueberry">Marketing</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>
          <div className="@container/main flex flex-1 flex-col gap-2">
            <UsersTable />
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
