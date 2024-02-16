import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason&apos;s website!</title>
      </Head>
      <main>
        <h1>This is the root page</h1>
        <Link href="/dashboard">Go to dashboard</Link>
        <hr></hr>
        <Link href="/dashboard/setting">Go to dashboard/settings</Link>
      </main>
    </>
  );
}
