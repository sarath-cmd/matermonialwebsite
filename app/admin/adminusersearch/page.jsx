'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../../ui/Loading";
import AdminNavigation from "../../ui/admin/AdminNavigation";
import Adminusersearch from "@/app/ui/admin/Adminusersearch";
const page = () => {
    const router = useRouter()
    const { pathname } = router;
     const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const validateAdmin = async () => {
            try {
                const token = sessionStorage.getItem('token');
                if (!token) {
                    router.push('/adminlogin');
                    return;
                }

                const response = await fetch('/api/admin/validate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({token: sessionStorage.getItem('token')}),
                });

                const data = await response.json();
                if (!response.ok) {
                    router.push('/adminlogin');
                }
            } catch (error) {
                console.error('Error validating admin:', error);
                router.push('/adminlogin');
            } finally {
              setIsLoading(false);
            }
        };
      validateAdmin();
    }, [pathname]);
    if (isLoading) {
      return <Loading />
    }

  return (
    <>
      <AdminNavigation />
      <Adminusersearch />
    </>
  )
}

export default page