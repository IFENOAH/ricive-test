import React from 'react'
import * as Icon from 'react-feather';

const SidebarLoggedinUser = () => {
  return (
    <div className="w-full inline-flex space-x-3 pt-2 mt-2 px-4">
        <div
            className="w-12 h-12 rounded-full flex-shrink-0"
            style={{
                backgroundImage: `url('https://bit.ly/ryan-florence')`,
                backgroundSize: 'contain',
            }}
        />

        <div className={`flex-1 flex items-center space-x-3 truncate`}>
            <span className="flex-1 inline-flex flex-col text-sm truncate">
                <span className="text-ricive-black font-medium truncate">
                    Karen Ijezie
                </span>
                <span className="text-ricive-darkgray font-normal truncate">
                    karen@ricive.com
                </span>
            </span>
            <Icon.LogOut className="w-5 h-5 text-ricive-darkgray flex-shrink-0" />
        </div>
    </div>
  )
}

export default SidebarLoggedinUser