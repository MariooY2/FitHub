import Link from "next/link";
import SignOut from "../../_components/SignOut";
import Image from "next/image";
import { auth } from "../../_lib/auth";
import { insertUserData, checkUserExists } from "../../_Backend/Actions";
import Bar from "./Bar";
async function SideBar() {
  const session = await auth();
  const image = session.user.image;
  const name = session.user.name;
  const email = session.user.email;

  //create a row for each user in the database
  if ((await checkUserExists(email)) === false)
    await insertUserData(email, name, image);

  return (
    <Bar image={image} name={name}/>
  );
}

export default SideBar;
