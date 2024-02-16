import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason's website!</title>
      </Head>
      <main>
        <h1>This is the settings page</h1>
        <Link href="/">Go to root</Link>
        <hr></hr>
        <Link href="/dashboard">Go to dashboard</Link>
      </main>
    </>
  );
}
