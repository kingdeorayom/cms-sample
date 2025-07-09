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
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
                    <Link href="/products/edit/65QUHV05">
                      <Button variant="link">Edit</Button>
                    </Link>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="link" className="text-destructive">
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete this product and remove all
                                data from the server.
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
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Link href='/products/edit/65QUHV05'>
                  <Button variant="link" >Edit</Button>
                  </Link>
                  <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" className='text-destructive'>Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Link href="/products/edit/65QUHV05">
                      <Button variant="link">Edit</Button>
                    </Link>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" className="text-destructive">
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Link href='/products/edit/65QUHV05'>
                  <Button variant="link" >Edit</Button>
                  </Link>
                  <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" className='text-destructive'>Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Link href="/products/edit/65QUHV05">
                      <Button variant="link">Edit</Button>
                    </Link>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" className="text-destructive">
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Link href='/products/edit/65QUHV05'>
                  <Button variant="link" >Edit</Button>
                  </Link>
                  <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" className='text-destructive'>Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Link href="/products/edit/65QUHV05">
                      <Button variant="link">Edit</Button>
                    </Link>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" className="text-destructive">
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Link href='/products/edit/65QUHV05'>
                  <Button variant="link" >Edit</Button>
                  </Link>
                  <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" className='text-destructive'>Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Link href="/products/edit/65QUHV05">
                      <Button variant="link">Edit</Button>
                    </Link>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" className="text-destructive">
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Link href='/products/edit/65QUHV05'>
                  <Button variant="link" >Edit</Button>
                  </Link>
                  <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" className='text-destructive'>Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Link href="/products/edit/65QUHV05">
                      <Button variant="link">Edit</Button>
                    </Link>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" className="text-destructive">
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Link href='/products/edit/65QUHV05'>
                  <Button variant="link" >Edit</Button>
                  </Link>
                  <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" className='text-destructive'>Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Link href="/products/edit/65QUHV05">
                      <Button variant="link">Edit</Button>
                    </Link>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link" className="text-destructive">
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Link href='/products/edit/65QUHV05'>
                  <Button variant="link" >Edit</Button>
                  </Link>
                  <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link">Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>65QUHV05</CardTitle>
                  <CardDescription>
                    65-INCH SMART QUANTUM 4K UHD TV
                  </CardDescription>
                  <CardAction>
                    <Link href="/products/edit/65QUHV05">
                      <Button variant="link">Edit</Button>
                    </Link>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link">Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image src="/tv.png" width={150} height={150} alt="tv" />
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Link href='/products/edit/65QUHV05'>
                  <Button variant="link" >Edit</Button>
                  </Link>
                  <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="link">Delete</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this product and remove all data from the
                            server.
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
