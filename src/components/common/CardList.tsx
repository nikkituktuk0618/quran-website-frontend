import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function CardList({
  key,
  name,
  rate,
  lessons,
  creator,
  rating,
  content,
}) {
  return (
      <Card key={key} className="w-64 p-4">
        <CardContent className="flex flex-col gap-1.5">
          {/* Placeholder for Image or Thumbnail */}
          <div className="h-[150px] w-full bg-black rounded-lg"></div>

          {/* Course Details */}
          <div className="flex justify-between items-center">
            <span className="text-sm">{name}</span>
            <span className="text-xs text-green-400">RS {rate}</span>
          </div>

          <div>
            <p className="text-xs text-gray-500">{lessons} Lessons</p>
            <p className="text-xs text-gray-500">
              {creator} • {rating} ⭐
            </p>
          </div>
        </CardContent>

        {/* Footer Section */}
        <CardFooter className="flex justify-between">
          <span className="text-sm">{content} content</span>
          <span className="text-sm bg-[#DEC88E] px-2 py-0.5 rounded-full cursor-pointer">
            View All
          </span>
        </CardFooter>
      </Card>
  );
}
