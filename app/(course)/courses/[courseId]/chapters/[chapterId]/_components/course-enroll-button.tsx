"use client"
import { useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import axios from "axios";

interface CourseEnrollButtonProps{
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoadingl = useState(false);

  const onClick = async () => {
    try {
      const response = await axios.post(`/api/courses/${courseId}/checkout`);

      window.location.assign(response.data.url);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size="sm"
      className="w-full md:w-auto"
    >
      Enroll for {formatPrice(price)}
    </Button>
  )
}