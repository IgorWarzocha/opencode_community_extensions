import type { Doc } from "../../../convex/_generated/dataModel";
import { CodeBlock } from "../CodeBlock";

interface PluginInstallationProps {
  plugin: Doc<"plugins">;
}

export function PluginInstallation({ plugin }: PluginInstallationProps) {
  const installCommand = `opencode plugin install ${plugin.slug}`;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Installation</h2>
      <CodeBlock code={installCommand} />
    </div>
  );
}
