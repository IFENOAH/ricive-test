import Link from "next/link"
import { useRouter } from "next/router"
import React, { cloneElement } from "react"

// eslint-disable-next-line react/display-name
export const SideBarItem = React.forwardRef(({children, url, icon, number}) => {

    const location = useRouter()

    return (
        <Link href={{pathname: url}} className={`w-full flex items-center rounded justify-between px-4 py-2 ${location.pathname === url ? "bg-ricive-dashgreen" : ""} `}>
            <div className="flex items-center justify-between">
                <span aria-hidden="true">
                {icon &&
                    cloneElement(icon, {
                        className: `w-5 h-5 text-ricive-darkgray ${location.pathname === url ? "text-ricive-primaryGreen" : ""}`,
                        //strokeColor: 'currentColor',
                    })}
                </span>
                <h2 className={`px-4 text-md text-ricive-main ${location.pathname === url ? "text-ricive-primaryGreen" : ""}`}>{children}</h2>
            </div>
        </Link>
    )
})