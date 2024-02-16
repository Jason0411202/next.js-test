import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <h1>This is the dashboard</h1>
        <Link href="/">Go to root</Link>
        <hr></hr>
        <Link href="/dashboard/setting">Go to dashboard/settings</Link>
      </main>
    </>
  );
}
