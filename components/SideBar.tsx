"use client";

import { useSession } from "next-auth/react";
import NewChat from "./NewChat";
import Image from "next/image";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  console.log(chats);
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat*/}
          <NewChat />
        </div>
        <div>{/* ModelSelection*/}</div>

        {/* Map through three CharTows */}

        {chats?.docs.map((chat) => {
          return <ChatRow key={chat.id} id={chat.id} />;
        })}
      </div>
      {session && (
        <Image
          src={session?.user?.image!}
          alt="Profile pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          width={100}
          height={100}
        />
      )}
    </div>
  );
}

export default SideBar;
