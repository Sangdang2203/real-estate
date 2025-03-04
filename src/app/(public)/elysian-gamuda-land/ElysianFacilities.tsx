import { Typography } from "@mui/material";
import ElysianPhotos from "./ElysianPhotos";

export default function ElysianFacilities() {
  return (
    <>
      <h2 className="text-[#8b5a3e] font-semibold py-2 uppercase text-center leading-loose">
        sống trọn cảm hứng
      </h2>
      <Typography className="text-sm md:text-lg text-justify">
        Về với Elysian, chúng ta tạm rời xa cuộc sống hối hả và ồn ào của đô thị
        để hòa mình cùng thiên nhiên đậm chất cây rợp bóng, cùng thưởng ngoạn
        cảnh sắc thiên nhiên yên bình, nơi ngồi thư giãn bên hồ bơi, hàn huyên
        cùng gia đình và bạn bè và hưởng thụ những tiện ích nội khu đa dạng và
        phong phú như: hồ bơi đạt tiêu chuẩn Olympic, vườn giữa tán khổng lồ,
        khu tập golf mini, sân thể thao chức năng, khu sân chơi trẻ em, “nông
        trại tại gia”, tổ hợp Shophouse, v.v...
      </Typography>
      <div className="my-5">
        <ElysianPhotos />
      </div>
    </>
  );
}
