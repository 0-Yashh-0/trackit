import { buttonVariants } from "@repo/ui/button"
import Link from "next/link"

const Footer=() => {
    return (
        <div className='w-full border-t border-border py-5 text-center self-end'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center'>
                <div className='text-center sm:text-left'>
                    <p className='text-sm'>
                        &copy; Trackit. All rights reserved.
                    </p>
                </div>
                <div className='flex flex-col mt-4 sm:mt-0 sm:flex-row'>
                    <Link
                        href='/privacy-policy'
                        className={buttonVariants({ variant: "ghost" })}
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href='/guide'
                        className={buttonVariants({ variant: "ghost" })}
                    >
                        Guide
                    </Link>
                    <a
                        href='https://forms.office.com/r/B8gUAVbDPA'
                        className={buttonVariants({ variant: "ghost" })}
                    >
                        Feedback
                    </a>
                    <a
                        href='https://github.com/Visual-Brahma/trackit'
                        className={buttonVariants({ variant: "ghost" })}
                    >
                        Contribute
                    </a>
                    <a
                        href='https://www.buymeacoffee.com/blaze2004'
                        className={buttonVariants({ variant: "ghost" })}
                    >
                        Donate
                    </a>
                    <Link
                        href='/contact-us'
                        className={buttonVariants({ variant: "ghost" })}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer