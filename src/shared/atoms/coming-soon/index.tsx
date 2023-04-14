import Image from "next/image";

export default function ComingSoon() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20%",
      }}
    >
      <Image
        alt="website under construction"
        src="/website-under-construction.png"
        width={400}
        height={240}
      />
    </div>
  );
}
