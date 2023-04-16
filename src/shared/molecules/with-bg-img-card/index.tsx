import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  imageUrl?: string;
};

export default function WithBgImgCard({ children, imageUrl }: Props) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
