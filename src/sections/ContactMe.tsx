import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import TextArea from "@/components/text-area/TextArea";
import ContentWrapper from "@/wrapper/ContentWrapper";

export default function ContactMe({ className }: { className: string }) {
  return (
    <ContentWrapper
      className={`col-start-5 col-span-4 row-start-6 row-span-2 flex flex-col items-center gap-6 ${className}`}
    >
      <h1 className="text-xl font-bold">Contact Me</h1>
      <div className="w-full flex flex-col gap-2">
        <Input />
        <TextArea />
        <Button />
      </div>
    </ContentWrapper>
  );
}
