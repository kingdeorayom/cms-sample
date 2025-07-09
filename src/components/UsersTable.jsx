import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Badge } from "./ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { Button } from "@/components/ui/button";

const UsersTable = () => {
  return (
    <div className="p-5 border m-5 shadow rounded-lg">
      <Table>
        <TableCaption>Lorem ipsum dolor sit amet.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Account Type</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">ABC123</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>service@devant.com</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>
              <div className="flex flex-row space-x-2">
                <Dialog>
                  <form>
                    <DialogTrigger asChild>
                      {/* <Button variant="outline">Open Dialog</Button> */}
                      <Badge variant="outline">Edit</Badge>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit user details</DialogTitle>
                        <DialogDescription>
                          Make changes to user details here. Click save when
                          you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="name-1">Name</Label>
                          <Input
                            id="name-1"
                            name="name"
                            defaultValue="John Doe"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="Email-1">Email</Label>
                          <Input id="Email-1" name="Email" defaultValue="@it" />
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
                                <SelectItem value="blueberry">
                                  Marketing
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Badge variant="destructive">Delete</Badge>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete this account and remove all data from the server.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive">
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">ABC123</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>admin@devant.com</TableCell>
            <TableCell>IT</TableCell>
            <TableCell>
              <div className="flex flex-row space-x-2">
                <Dialog>
                  <form>
                    <DialogTrigger asChild>
                      {/* <Button variant="outline">Open Dialog</Button> */}
                      <Badge variant="outline">Edit</Badge>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit user details</DialogTitle>
                        <DialogDescription>
                          Make changes to user details here. Click save when
                          you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="name-1">Name</Label>
                          <Input
                            id="name-1"
                            name="name"
                            defaultValue="John Doe"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="Email-1">Email</Label>
                          <Input id="Email-1" name="Email" defaultValue="@it" />
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
                                <SelectItem value="blueberry">
                                  Marketing
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Badge variant="destructive">Delete</Badge>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete this account and remove all data from the server.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive">
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">ABC123</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>marketing@devant.com</TableCell>
            <TableCell>Marketing</TableCell>
            <TableCell>
              <div className="flex flex-row space-x-2">
                <Dialog>
                  <form>
                    <DialogTrigger asChild>
                      {/* <Button variant="outline">Open Dialog</Button> */}
                      <Badge variant="outline">Edit</Badge>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit user details</DialogTitle>
                        <DialogDescription>
                          Make changes to user details here. Click save when
                          you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="name-1">Name</Label>
                          <Input
                            id="name-1"
                            name="name"
                            defaultValue="John Doe"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="Email-1">Email</Label>
                          <Input id="Email-1" name="Email" defaultValue="@it" />
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
                                <SelectItem value="blueberry">
                                  Marketing
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Badge variant="destructive">Delete</Badge>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete this account and remove all data from the server.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive">
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">ABC123</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>service@devant.com</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>
              <div className="flex flex-row space-x-2">
                <Dialog>
                  <form>
                    <DialogTrigger asChild>
                      {/* <Button variant="outline">Open Dialog</Button> */}
                      <Badge variant="outline">Edit</Badge>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit user details</DialogTitle>
                        <DialogDescription>
                          Make changes to user details here. Click save when
                          you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="name-1">Name</Label>
                          <Input
                            id="name-1"
                            name="name"
                            defaultValue="John Doe"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="Email-1">Email</Label>
                          <Input id="Email-1" name="Email" defaultValue="@it" />
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
                                <SelectItem value="blueberry">
                                  Marketing
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Badge variant="destructive">Delete</Badge>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete this account and remove all data from the server.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive">
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;
