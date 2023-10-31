import Image from "next/image";

export default function LifeAtMwImage({ imgSrc, width }: any) {
  return (
    <div>
      <Image
        src={imgSrc}
        width={width}
        height={720}
        alt=""
        className="object-cover"
      />
    </div>
  );
}
