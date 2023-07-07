import { NextPageContext } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
export default function Home() {
   const {data: session } = useSession();
   console.log(session);
  return (
    <>
    <h1 className="text-red-700 text-4xl bg-yellow-300">
      {session?.user?.name}
    </h1>
    <img 
      src={session?.user?.image!} 
      alt="nada" 
      className="w-[128px] h-32 rounded-full"/>
      <h4>{session?.user?.email}</h4>
    {
      session ? (<button onClick={()=> signOut()}  className="bg-blue-400">Sign Out</button>) : (
      <button onClick={()=> signIn()} className="bg-blue-400">Sign In</button>) 
    }
    </>
  )
}

export async function getServerSideProps(ctx: NextPageContext){
  const session = await getSession(ctx);
  console.log("session: ", session)
  return {
    props: {
      session
    },
  };
}
