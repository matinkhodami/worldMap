interface Props {
  title: string;
  subtitle: string;
}
export function Hero({ title, subtitle }: Props) {
  return (
    <header className="overflow-hidden bg-linear-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-3">
          {title}
        </h1>
        <p className="text-xl text-text-secondary max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
