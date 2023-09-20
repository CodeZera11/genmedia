import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
    return (
        <div className="bg-black">
            <Sheet>
                <SheetTrigger asChild>
                    <AlignRight size={40} />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className="mb-10 text-black">
                        <SheetTitle>GenMedia</SheetTitle>
                    </SheetHeader>
                    <div className='flex flex-col items-center justify-between gap-10 text-black'>
                        <SheetClose asChild className="">
                            <Link href={"/"} className='text-lg font-light tracking-wide uppercase'>Home</Link>
                        </SheetClose>
                        <SheetClose asChild className="">
                            <Link href={"#explore"} className='text-lg font-light tracking-wide uppercase'>Explore</Link>
                        </SheetClose>
                        <SheetClose asChild className="">
                            <Link href={"#about"} className='text-lg font-light tracking-wide uppercase'>About</Link>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
