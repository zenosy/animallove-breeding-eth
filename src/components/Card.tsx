/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export interface NFTType {
  tokenId: number;
  imgUrl: string;
}

export default function Card(props: {
  tokenId: number;
  imgUrl: string;
  isUsed: boolean;
  selectedToken: NFTType[] | undefined;
  onCardClick(): void;
}) {
  const [hoverState, setHoverState] = useState<boolean>(false);

  return (
    <div
      className="relative w-full rounded-lg"
      onMouseOver={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      onClick={() => props.onCardClick()}
    >
      <div
        className={`w-full top-0 bottom-0 right-0 left-0 absolute ${
          (hoverState || props.imgUrl === props.selectedToken?.[0]?.imgUrl) &&
          "backdrop-blur-sm"
        } bg-opacity-80 duration-300 transition-all ease-in-out cursor-pointer rounded-lg`}
      />
      <img src={`${props.imgUrl}`} alt="" width={280} className="rounded-lg" />
      <div className="absolute top-0 left-0 p-1 text-white bg-gray-800 rounded-tl-md">
        <p className="text-sm">{props.tokenId}</p>
      </div>
      {props.isUsed && (
        <div className="absolute top-0 right-0 p-1 text-white bg-gray-800 rounded-tr-md">
          <p className="text-sm">Used</p>
        </div>
      )}
    </div>
  );
}
