import Link from "next/link"
import React, { cloneElement } from "react"

// eslint-disable-next-line react/display-name
export const SideBarItem = React.forwardRef(({children, url, icon, number}) => {

    return (
        <Link href={{pathname: url}} className={`w-full flex items-center rounded justify-between px-4 py-2`}>
            <div className="flex items-center justify-between">
                <span aria-hidden="true">
                {icon &&
                    cloneElement(icon, {
                        className: 'w-5 h-5 text-ricive-darkgray',
                        //strokeColor: 'currentColor',
                    })}
                </span>
                <h2 className="px-4 text-md text-ricive-main ">{children}</h2>
            </div>
        </Link>
    )
})