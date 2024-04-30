import Sidenav from '@/components/custom/Sidenav';
import Topnav from '@/components/custom/Topnav';
import React from 'react'

const DashboardLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <main className='flex'>
        <Sidenav/>
        <section className="flex-grow">
          <Topnav />
          {children}
        </section>
    </main>
  )
}

export default DashboardLayout