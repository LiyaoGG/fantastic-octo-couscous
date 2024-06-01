import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data}
    </main>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      data: 123,
    }, // will be passed to the page component as props
  };
}
