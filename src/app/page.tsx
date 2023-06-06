import { Roboto } from "next/font/google";

const inter = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: "100",
  preload: true,
});

export default function App({ children }: { children: React.ReactNode }) {
  return <main className={inter.className}>{children}</main>;
}
