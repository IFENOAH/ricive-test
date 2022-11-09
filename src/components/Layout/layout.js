import * as Icon from 'react-feather';
import {  useState } from "react";
import Image from "next/image";
import SidebarHeader from '../sidebar/sidebarheader';
import { SideBarItem } from '../sidebar/sidebaritem';
import { useMediaQuery } from '../../hooks/useMedia';
import SidebarLoggedinUser from '../sidebar/sidebarloggedinuser';
import SidebarInfo from '../sidebar/sidebarinfo';
import Logo from '../assets/icons/ricive-logo.svg'

export const MainAppLayout = ({children}) => {

  const [showPanel, setShowPanel] = useState(false);

  let isMobile = useMediaQuery('(max-width: 768px)')

   const toggleShowPanel = () => {
    setShowPanel((prev) => !prev);
  };

    return (
        <div className="flex h-screen">
            {/** Backdrop - Show on mobile */}
            <div
                className={`fixed inset-0 z-10 bg-ricive-overlay bg-opacity-75 lg:hidden`}
                style={{
                opacity: 0.5,
                display: isMobile && showPanel ? 'block' : 'none',
                }}
                aria-hidden="true"
                onClick={toggleShowPanel}
            ></div>

            <aside className={`fixed pt-6 pb-2 inset-y-0 z-10 border-r-2 border-ricive-stroke2 lg:absolute bg-ricive-white w-80 ${isMobile && !showPanel && 'hidden'}`}>
                <div className="flex flex-col h-full space-y-1 overflow-y-hidden hover:overflow-y-auto">
                    <nav  className="space-y-1 px-2 mb-6 mt-2">
                        { isMobile ? <Icon.X strokeWidth='4px' onClick={()=> {setShowPanel(prev => !prev)}} style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            width: '100%',
                            marginBottom:  '20px'
                        }} /> : null }
                        <SidebarHeader />
                    </nav>

                    <nav className="flex justify-between flex-col flex-1">

                        <section className='flex-1 space-y-2 px-2 pt-4'>
                            <SideBarItem icon={<Icon.Home/>}>Home</SideBarItem>
                            <SideBarItem url = '/dashboard' icon={<Icon.BarChart2/>}>Dashboard</SideBarItem>
                            <SideBarItem icon = {<Icon.Layers />}>Projects</SideBarItem>
                            <SideBarItem icon = {<Icon.CheckSquare number/>}>Tasks</SideBarItem>
                            <SideBarItem icon={<Icon.PieChart/>}>Reporting</SideBarItem>
                            <SideBarItem icon={<Icon.Users />}>Users</SideBarItem>
                        </section>
                        <nav className="pb-4">
                            <SideBarItem icon={<Icon.LifeBuoy />}>Support</SideBarItem>
                            <SideBarItem icon={<Icon.Settings />}>Settings</SideBarItem>
                        </nav>
                    </nav>
                   
                    <nav className=" flex flex-col pt-2 px-2 flex divide-y divide-ricive-stroke space-y-6">
                        <SidebarInfo />
                        <SidebarLoggedinUser />
                    </nav>
                </div>
            </aside>

            <main
                className={`flex-1 w-full h-full ${ !isMobile && 'pl-80'} `}
            >
                {/* Mobile header */}
                <div
                    className={`sticky w-full flex items-center justify-between bg-ricive-white border-b border-ricive-stroke p-4 top-0 ${ !isMobile && 'hidden'} ${
                        isMobile && showPanel && 'opacity-10'
                    }`}
                >
                    <div className="flex items-center space-x-2">
                        <Image src= {Logo} alt="logo" />
                    </div>
                    <Icon.Menu
                        width={24}
                        height={24}
                        className="text-white"
                        onClick={toggleShowPanel}
                    />
                </div>
                
                {/* content */}
                <div className="flex flex-col flex-1 h-full min-h-screen overflow-x-hidden overflow-y-auto bg-ricive-background py-6 px-6  lg:px-12">
                    <div>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}