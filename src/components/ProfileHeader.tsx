import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { profile } from "@/data/profile";

export function ProfileHeader() {
  return (
    <>
      <div className="shadow-lg w-[640px] bg-blue-100 py-6 px-6 rounded-3xl">
        <div className="flex items-center space-x-6 border-b-2 border-blue-200 pb-2">
          <Avatar className="w-32 h-32">
            <AvatarImage src={profile.avatarUrl} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <div>
            <h4 className="text-2xl font-bold py-4">{profile.name}</h4>
            <p className="text-xl text-gray-700 mb-2">{profile.role}</p>

          </div>
        </div>
            <div className="flex flex-wrap gap-2 py-4 pb-0">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
      </div>
    </>
  );
}