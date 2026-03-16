export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-dark pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="page-heading font-display text-4xl sm:text-5xl font-bold text-text-light tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="page-subtitle text-base sm:text-lg text-text-light-muted mt-4 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
