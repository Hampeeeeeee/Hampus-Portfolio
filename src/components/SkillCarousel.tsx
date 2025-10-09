"use client";

import { profile } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";

export function SkillCarousel() {
  return (
    <>
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> Skills </h2>
      <div className="w-full max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {profile.skills.map(({ name, icon: Icon }, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <Icon className="text-4xl mb-2 text-primary" />
              <span className="text-sm font-medium">{name}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
