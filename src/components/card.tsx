interface Props {
  title: string;
  children: React.ReactNode;
}
export function Card({ title, children }: Props) {
  return (
    <div className="bg-surface rounded-xl shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-accent/10 px-6 py-4 border-b border-border">
        <h2 className="text-2xl font-semibold text-text-primary">{title}</h2>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
