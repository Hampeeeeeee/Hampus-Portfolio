import { profile } from "@/data/profile";

export default function AboutTab() {
  return (
    <div className="bg-blue-50 p-4 rounded-b">
      <p><i>"{profile.about}"</i></p>
    </div>
  );
}