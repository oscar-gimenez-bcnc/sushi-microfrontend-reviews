"use client";

import { FC } from "react";

interface HeaderProps {
  review: any;
}

const Review: FC<HeaderProps> = ({ review }) => {
  return (
    <div className="flex flex-row gap-4">
      <div>{review.createdAt}</div>
      <div>{review.name}: </div>
      <div>{review.description}</div>
    </div>
  );
};

export default Review;
