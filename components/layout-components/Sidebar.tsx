'use client';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import MobileNavigation from '../mobile-components/MobileNavigation';

export default function Sidebar() {
	return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-«rr»"
          data-state="closed"
          aria-label="Open navigation menu"

        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle>Luxe</SheetTitle>
          <SheetDescription className="text-pretty font-semibold text-primary">
            Bring Luxury Home with Luxe Furniture
          </SheetDescription>
        </SheetHeader>
        <MobileNavigation />
        <SheetFooter className="">
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
