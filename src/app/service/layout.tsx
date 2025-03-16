export const metadata = {
  title: 'Services | fram.dev',
  description: 'Explore our comprehensive range of software development and consulting services.',
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
      {children}
    </div>
  );
}
