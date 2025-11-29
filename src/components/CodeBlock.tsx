interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <div className="bg-gray-50 border border-border p-4 font-mono text-sm overflow-x-auto">
      <code>{code}</code>
    </div>
  );
}
