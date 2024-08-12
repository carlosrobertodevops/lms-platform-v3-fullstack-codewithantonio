"use client"


import axios from "axios";
import MuxPlayer from "@mux/mux-player-react";

import { useState } from "react";

import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";

import { Loader2, Lock } from "lucide-react";

import { cn } from "@/lib/utils";

import { useConfettiStore} from "@/hooks/use-confetti-store";

interface VideoPlayerProps {
  playbackId: string;
  courseId:string;
  chapterId: string;
  nextChapterId: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string;
}

export const VideoPlayer = (
  playbackId,
  courseId,
  chapterId,
  nextChapterId,
  isLocked,
  completeOnEnd,
  title,
}): VideoPlayerProps => {
  return (
    <div className="relative aspect-video">
      {!isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="h-8 w-8 animate-spin text-secondary"/>
        </div>
      )}
     </div>
  )
}
