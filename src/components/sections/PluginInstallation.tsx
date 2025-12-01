import type { Doc } from "../../../convex/_generated/dataModel";
import { CodeBlock } from "../CodeBlock";

export interface PluginInstallationProps {
  plugin: Doc<"extensions">;
}

export function PluginInstallation({ plugin }: PluginInstallationProps) {
  const installCommand =
    plugin.installationCommand ||
    `# Installation instructions for ${plugin.name}`;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Installation</h2>
      <CodeBlock code={installCommand} />
    </div>
  );
}
