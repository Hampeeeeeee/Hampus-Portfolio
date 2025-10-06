import { profile } from "@/data/profile";

export default function AboutTab() {
  return (
    <div className="border-1 p-4 rounded-b">
      <p><i>"{profile.about}"</i></p>
    </div>
  );
}