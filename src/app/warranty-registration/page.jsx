"use client";

import Dashboard from "@/components/dashboard/dashboard";
import { SiteHeader } from "@/components/dashboard/site-header";
import NoAccess from "@/components/NoAccess";
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
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAccountStore } from "@/store/useAccountStore";

export default function WarrantyRegistrationPage() {
  const accountType = useAccountStore((state) => state.accountType);

  return (
    <Dashboard>
      <SiteHeader title="Warranty Registration Requests" />
      {accountType === "admin" || accountType === "service" ? (
        <>
          <div className="p-5 my-5 flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">
              Manage Warranty Registration Requests
            </h1>
            <p>
              View and approve warranty registration requests from customers.
            </p>
          </div>
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="p-5 border m-5 shadow rounded-lg">
              <Table>
                <TableCaption>Lorem ipsum dolor sit amet.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Serial Number</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>JF8467G0FJ47GFJ</TableCell>
                    <TableCell>Valid</TableCell>
                    <TableCell>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Badge>View</Badge>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Provident obcaecati eos
                              nesciunt, consequatur omnis esse debitis? Sed,
                              iste incidunt sapiente doloribus magni fugit
                              aliquid qui architecto! Ullam sint aspernatur
                              facere.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>JF8467G0FJ47GFJ</TableCell>
                    <TableCell>Valid</TableCell>
                    <TableCell>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Badge>View</Badge>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Provident obcaecati eos
                              nesciunt, consequatur omnis esse debitis? Sed,
                              iste incidunt sapiente doloribus magni fugit
                              aliquid qui architecto! Ullam sint aspernatur
                              facere.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>JF8467G0FJ47GFJ</TableCell>
                    <TableCell>Valid</TableCell>
                    <TableCell>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Badge>View</Badge>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Provident obcaecati eos
                              nesciunt, consequatur omnis esse debitis? Sed,
                              iste incidunt sapiente doloribus magni fugit
                              aliquid qui architecto! Ullam sint aspernatur
                              facere.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>JF8467G0FJ47GFJ</TableCell>
                    <TableCell>Valid</TableCell>
                    <TableCell>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Badge>View</Badge>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Provident obcaecati eos
                              nesciunt, consequatur omnis esse debitis? Sed,
                              iste incidunt sapiente doloribus magni fugit
                              aliquid qui architecto! Ullam sint aspernatur
                              facere.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
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
