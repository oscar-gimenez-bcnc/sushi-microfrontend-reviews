"use client";

import { FC } from "react";

interface HeaderProps {
  review: any;
}

const Review: FC<HeaderProps> = ({ review }) => {
  return <div>{review.name}</div>;
};

export default Review;
