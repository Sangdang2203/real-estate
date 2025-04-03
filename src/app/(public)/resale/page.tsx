import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Page() {
  return (
    <>
      <GlowingEffect
        glow={false} // Bật hiệu ứng ánh sáng
        blur={5} // Độ mờ của ánh sáng
        spread={15} // Phạm vi ánh sáng
        className="" // Thêm lớp tùy chỉnh
      >
        <div className="p-4 bg-black rounded-lg shadow-md text-black">
          <h2 className="text-xl font-bold">Welcome to My Project</h2>
          <p>This is an example of using GlowingEffect in a component.</p>
        </div>
      </GlowingEffect>
    </>
  );
}
