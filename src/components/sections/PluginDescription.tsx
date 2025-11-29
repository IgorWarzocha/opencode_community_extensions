import type { Doc } from "../../../convex/_generated/dataModel";

export interface PluginDescriptionProps {
  plugin: Doc<"plugins">;
}

export function PluginDescription({ plugin }: PluginDescriptionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <p className="text-secondary leading-relaxed dark:text-secondary-dark">
        {plugin.description}
      </p>
    </div>
  );
}
