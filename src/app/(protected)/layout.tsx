import PrimarySearchAppBar from "@/components/layout/PrimarySearchAppBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="protected">
      {children}
      <PrimarySearchAppBar />
    </div>
  );
}
