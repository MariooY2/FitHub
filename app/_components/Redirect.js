"use client"
import { useRouter } from 'next/navigation'
 function Redirect(session) {
    const router = useRouter()
    if(session?.user){
        router.push('/dashboard', { scroll: false })
    }
   
}

export default Redirect
