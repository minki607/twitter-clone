import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";

// print

export default function Home({ providers }) {
  console.log(providers);

  const { data: session } = useSession();
  if (!session) {
    return <Login providers={providers} />;
  }

  return (
    <div>
      <Head>
        <title>트워터 클론</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#000] min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        {/* Widgets */}

        {/* Modal */}
      </main>
      Home Page
    </div>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
