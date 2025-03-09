import Image from "next/image";
import { Typography } from "@mui/material";
import elysian_landscape from "@/images/elysian/elysian_landscape.jpg";
import elysian_banner from "@/images/elysian/elysian_banner.jpg";

export default function ElysianIntroduction() {
  return (
    <>
      <Typography className="py-2 text-sm md:text-lg">
        <strong className="text-green-700 ">Dự án Elysian</strong> là một một bộ
        sưu tập các ngôi nhà tinh tế nằm giữa khu rừng đô thị sinh thái, mang
        đến cuộc sống xanh bền vững, với thiết kế Biophilic đầy cảm hứng tạo nên
        một cộng đồng thịnh vượng. Dự án tọa lạc tại đường Lò Lu, phường Trường
        Thạnh,Thành Phố Thủ Đức, được Chủ đầu tư Gamuda Land phát triển có quy
        mô 4 block cung ứng 1396 căn hộ chuẩn xanh.
      </Typography>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Image
            className="rounded-lg w-full h-auto"
            src={elysian_banner}
            alt="căn hộ elysian by Gamuda Land"
            priority
            loading="eager"
          />
          <div className="h-auto">
            <Typography className="text-sm md:text-lg">
              <strong className="text-green-700 ">Elysian</strong> là một một bộ
              sưu tập các ngôi nhà tinh tế nằm giữa khu rừng đô thị sinh thái,
              mang đến cuộc sống xanh bền vững với thiết kế Biophilic đầy cảm
              hứng tạo nên một cộng đồng thịnh vượng. Không gian sống tại
              Elysian là nơi ưu tiên tính kết nối, có thể cân bằng được sự tiện
              nghi hiện đại và vẫn trong lành yên ả, nơi chăm chút từng trải
              nghiệm sống, nâng niu thỏa mãn mọi giác quan.
            </Typography>
            <div className="grid grid-cols-2 gap-6 my-5">
              <div>
                <Typography className="text-sm md:text-lg">
                  Chủ đầu tư:
                </Typography>
                <Typography className="text-sm md:text-lg">
                  Tên dự án:
                </Typography>
                <Typography className="text-sm md:text-lg">Vị trí:</Typography>
                <Typography className="text-sm md:text-lg">Quy mô</Typography>

                <Typography className="text-sm md:text-lg">
                  Loại hình sản phẩm:
                </Typography>
                <Typography className="text-sm md:text-lg">
                  Cơ cấu diện tích:
                </Typography>

                <Typography className="text-sm md:text-lg">Pháp lý:</Typography>
                <Typography className="text-sm md:text-lg">
                  Hiện trạng:
                </Typography>
              </div>
              <div>
                <Typography className="text-sm md:text-lg">
                  Gamuda Land
                </Typography>
                <h1 className="text-sm md:text-lg text-green-700 font-semibold">
                  Elysian
                </h1>
                <Typography className="text-sm md:text-lg">
                  TP. Thủ Đức, HCM
                </Typography>
                <Typography className="text-sm md:text-lg">
                  <strong>28,412 m2</strong>
                </Typography>
                <Typography className="text-sm md:text-lg">Căn hộ</Typography>{" "}
                <Typography className="text-sm md:text-lg">
                  <strong>36 - 115 m2</strong>
                </Typography>
                <Typography className="text-sm md:text-lg">
                  Sở hữu lâu dài
                </Typography>
                <Typography className="text-sm md:text-lg">
                  Đã xây tới tầng 4
                </Typography>
              </div>
            </div>

            <Typography className="text-sm md:text-lg">
              Chủ đầu tư Gamuda Land cam kết xây dựng Elysian với thiết kế đặc
              trưng độc đáo, tập trung chính vào bảo vệ toàn diện không gian
              sống hòa quyện với thiên nhiên và đa dạng sinh học. Công ty sẽ
              không ngừng cải tiến sản phẩm để nâng cao chất lượng các dự án
              thiết kế xanh cho các dự án ra mắt sắp tới. Trong tương lai gần,
              khách hàng sẽ thấy nhiều dự án mang phong cách Biophilic của
              Gamuda Land, với sự quy hoạch tổng thể để tạo ra nhiều “rừng trong
              phố” hơn và trồng cây nhiều hơn.
            </Typography>
            <Image
              className="rounded-lg w-full h-auto mt-3"
              src={elysian_landscape}
              alt="Elysian by Gamuda Land"
              title="Elysian by Gamuda Land"
              priority
              loading="eager"
            />
          </div>
        </div>
      </div>
    </>
  );
}
