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
import { Separator } from "@/components/ui/separator";
import { useAccountStore } from "@/store/useAccountStore";
import Image from "next/image";

export default function NewsAndEventsPage() {
  const accountType = useAccountStore((state) => state.accountType);
  return (
    <Dashboard>
      <SiteHeader title="News and Events" />

      {accountType === "admin" || accountType === "marketing" ? (
        <>
          <div className="p-5 my-5 flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">
              Add, edit or delete news and events
            </h1>
            <p>
              Manage updates with ease. Create new announcements, update their
              information, or remove them entirely from the system.
            </p>
            <div>
              <Button>
                <span className="text-sm">Create</span>
              </Button>
            </div>
          </div>
          <Separator />
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
              <Card>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/20th.jpg"
                      width={150}
                      height={150}
                      alt="tv"
                      className="w-fit"
                    />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Celebrating 20 Years of Devant TVs: The Heart of Filipino
                    Homes
                  </CardTitle>
                  <CardDescription>May 23, 2023 by Devant</CardDescription>
                  <CardDescription>
                    Manila, 2023 – This year, Devant marks a significant
                    milestone as it celebrates 20 years of being at the heart of
                    Filipino homes. Since its inception, Devant has established
                    itself as an essential part of the Filipino lifestyle,
                    offering high-quality TVs that serve as a central hub for
                    family bonding, entertainment, and relaxation. In line …
                    Read morez
                  </CardDescription>
                </CardHeader>

                {/* <CardFooter>
                  <Button variant="link">Edit</Button>
                  <Button variant="link">Delete</Button>
                </CardFooter> */}
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/tvbabad.jpg"
                      width={150}
                      height={150}
                      alt="tv"
                      className="w-fit"
                    />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    TVBabad: Binge-Watching is Better on a Bigger Screen
                  </CardTitle>
                  <CardDescription>May 23, 2023 by Devant</CardDescription>
                  <CardDescription>
                    Binge-watch the FIlipino way when you TVBabad with Devant!
                  </CardDescription>
                </CardHeader>

                {/* <CardFooter>
                  <Button variant="link">Edit</Button>
                  <Button variant="link">Delete</Button>
                </CardFooter> */}
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/ft.jpg"
                      width={150}
                      height={150}
                      alt="tv"
                      className="w-fit"
                    />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Treat Your Dad This Father’s Day!
                  </CardTitle>
                  <CardDescription>June 1, 2021 by Devant</CardDescription>
                  <CardDescription>
                    Since Father’s Day is just around the corner, we’ve got a
                    treat that your Dads will surely love! Gift your Dad this
                    Father’s Day with a Devant big screen TV and get a soundbar
                    for FREE.
                  </CardDescription>
                </CardHeader>

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
