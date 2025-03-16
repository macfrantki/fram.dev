interface ServiceContentProps {
  content: React.ReactNode;
}

export default function ServiceContent({ content }: ServiceContentProps) {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl px-4 py-16">
      <div className="prose-headings:font-grotesk prose-headings:text-primary">{content}</div>
    </article>
  );
}
