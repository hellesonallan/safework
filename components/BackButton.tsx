import { Button } from "./ui/button";
import { ArrowLeft } from "~/lib/icons/ArrowLeft";
import { router } from "expo-router";

export function BackButton() {
  return (
    <Button className="rounded-full ml-2" variant={"ghost"} size={"icon"}>
      <ArrowLeft size={24} strokeWidth={2} onPress={() => router.back()} />
    </Button>
  );
}
