'use client'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default  function Page() {
    
    const [orders, setOrders] = useState([] as any)
    const  payDetails = async ()=>{
        const res = await fetch('/api/payment')
        const data = await res.json();
        setOrders(data.data)
    }
    useEffect(()=>{
        payDetails()
    },[])

    const removeOrder = async (orderId: number) => {
        try {
            const res = await fetch(`/api/payment?id=${orderId}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (res.ok) {
                setOrders(orders.filter((order: any) => order.id !== orderId));
                toast.success('Order confirmed successfully');
            } else {
                toast.error(data.error || 'Failed to confirm order');
            }
        } catch (error) {
            console.error('Error removing order:', error);
            toast.error('Failed to confirm order');
        }
    };

   
  return (
    <ProtectedPage>
    <div className='min-h-screen text-white py-32 bg-linear-to-r from-black via-red-900  to-black'>{
        orders.map((order:any)=>(
            <div key={order.id} className='flex flex-col md:flex-row justify-between gap-8 py-4 border-b border-gray-700 mx-5 mb-4'>
                <p>{order?.plan}</p>
                <p>{order?.email}</p>
                <p>{order?.phone}</p>
                <Button onClick={() => removeOrder(order.id)}>Confirm</Button>
            </div>
        ))
    }</div>
</ProtectedPage>
  )
}

const ProtectedPage = ({children}: {children: React.ReactNode}) => {
        const { user } = useUser()
        const [userRole, setUserRole] = useState<string | null>(null)

useEffect(() => {
    // Reset userRole when user logs out
    if (!user) {
      setUserRole(null);
      return;
    }
    const fetchUserRole = async () => {
      if (user?.id && user?.primaryEmailAddress?.emailAddress) {
    try {
        const response = await fetch('/api/user',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
            email: user.primaryEmailAddress.emailAddress,
            name: user.fullName
        })
      });
      const data = await response.json();
      console.log("Fetched user data:", data);
      setUserRole(data.role);
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
        }
}  
fetchUserRole();  
    }, [user])
    const isAdmin = userRole === "admin"
    if (!user || !isAdmin) {
        return <div className='text-white py-32 text-center h-screen md:text-3xl'>Access Denied. Admins only.</div>;
      }
    return <>{children}</>;
  }
