interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <div className="bg-muted border border-border p-4 font-mono text-sm overflow-x-auto transition-colors dark:bg-muted-dark dark:border-border-dark">
      <code>{code}</code>
    </div>
  );
}
