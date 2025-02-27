import { Typography } from "@mui/material";

export default function EcoRetreatLocation() {
  return (
    <div className="flex-col justify-between">
      <div id="grad" className="p-4 rounded-t-lg opacity-95">
        <Typography
          variant="h5"
          className="text-[#8b5a3e] font-semibold uppercase leading-loose"
        >
          vị trí giao lộ hoàn kim
        </Typography>
        <Typography className="text-white text-justify  leading-loose text-sm md:text-lg">
          Nằm trên bờ sông Vàm Cỏ Đông thơ mộng, Tổ hợp dự án Eco Retreat tỏa
          sáng như một viên ngọc bên dòng nước xanh mát. Chỉ cách trung tâm
          thành phố Hồ Chí Minh 18Km, Eco Treat là nơi trú ẩn lý tưởng cho những
          gia chủ kiếm tìm sự bình yên nơi thiên nhiên bên cạnh sự tiện lợi và
          phồn vinh nơi phố thị Eco Retreat lại càng đắc địa khi thuộc về Bến
          Lức – một trong những khu đô thị vệ tinh lớn nhất của Tp.HCM với cơ sở
          hạ tầng giao thông đồng bộ, thuận tiện. Từ đây, cư dân Eco Retreat có
          thể dễ dàng kết nối với mọi nơi và trải nghiệm cuộc sống đa sắc màu.
        </Typography>
      </div>
      <div className="w-full">
        <video
          controls
          width="100%"
          height="auto"
          autoPlay
          className="rounded-b-lg object-cover"
          title="Vị trí dự án Eco Retreat"
          muted
        >
          <source
            src="/videos/EcoRetreatLongAn_location.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
