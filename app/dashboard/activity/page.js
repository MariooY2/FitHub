import Pagecomp from "./Pagecomp"
import { auth } from "@/app/_lib/auth"
export const revalidate=3;
async function page() {
    const session = await auth();
    return (
        <>
            <Pagecomp email={session.user.email}/>
        </>
    )
}

export default page
