"use client"
import { useRouter } from 'next/navigation'
 function Redirect(session) {
    const router = useRouter()
    if(session?.user){
        router.push('/dashboard')
    }
   
}

export default Redirect
