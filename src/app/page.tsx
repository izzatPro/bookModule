import { UserButton } from "@clerk/nextjs";
import { connectDB } from "@/config/dbConfig";
import { auth } from "@clerk/nextjs/server";
connectDB();




export default function Home() {
  const {userId} = auth();
  console.log(userId);
  return (
    <div className="p-10">
          <UserButton afterSignOutUrl="http://localhost:3000/" />
          <h1>Hello world</h1>
    </div>

  )
}
