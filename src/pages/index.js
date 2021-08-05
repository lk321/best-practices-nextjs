import Head from "next/head";
import Image from "next/image";

import { useSession, signOut } from "next-auth/client";

import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";

function Home() {
    const [session, loading] = useSession();

    if (typeof window !== "undefined" && loading) return null;
    if (!session) return <h2>No permitido</h2>;

    return (
        <div className={styles.container}>
            <Head>
                <title>Redux Toolkit</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <Image
                    width={500}
                    height={500}
                    src="/logo.svg"
                    className={styles.logo}
                    alt="logo"
                />
                <Counter />
                <p>
                    Welcome <code>{session.user.name}</code>.
                </p>
                <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: "/sign-in" })}
                >
                    Sign out!
                </button>
            </header>
        </div>
    );
}

export default Home;
