import type { Doc } from "../../../convex/_generated/dataModel";

export interface PluginFeaturesProps {
  plugin: Doc<"plugins">;
}

export function PluginFeatures({ plugin }: PluginFeaturesProps) {
  if (plugin.features.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Features</h2>
      <ul className="space-y-2">
        {plugin.features.map((feature, index) => (
          <li
            key={index}
            className="text-secondary flex items-start dark:text-secondary-dark"
          >
            <span className="mr-3 text-accent dark:text-accent-dark">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
