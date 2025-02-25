import { NavLink, Project } from "../interfaces";
import elysian from "@/images/elysian/elysian.jpg";
import eaton_park from "@/images/eaton_park/model_housing.jpg";
import haus_dalat from "@/images/haus_dalat/haus_dalat.png";
import ecoretreat_longan from "@/images/eco_retreat/Ecoretreat_Longan_Landscape.jpg";
import celesta_rise from "@/images/celesta/celesta_rise.jpg";
import celesta_heightd from "@/images/celesta/celesta_heights.webp";
import celesta_gold from "@/images/celesta/celesta_rise.jpg";

export const navLinks: NavLink[] = [
  {
    name: "trang chủ",
    path: "/",
  },
  {
    name: "giới thiệu",
    path: "/gioi-thieu",
  },
  {
    name: "dự án",
    path: "/projects",
  },
  {
    name: "liên hệ",
    path: "#contact",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "eaton park",
    projectUrl: "/eaton-park",
    developer: "gamuda land",
    location: "Mai Chí Thọ, TP.HCM",
    productType: "Căn hộ, Shophouse",
    area: "3,7 hecta",
    unitType: "50 - 116 m2",
    handover: "Hoàn thiện nội thất",
    owner: "Sở hữu lâu dài",
    status: "Đang thi công phần thân",
    type: "hot",
    description:
      "Eaton Park là một dự án căn hộ cao cấp tọa lạc tại vị trí đắc địa ngay mặt tiền đường Mai Chí Thọ, được phát triển bởi Gamuda Land – một trong những tập đoàn bất động sản hàng đầu Việt Nam, Eaton Park hứa hẹn mang lại một phong cách sống sang trọng, hiện đại và giao hòa với thiên nhiên.",

    images: [
      {
        alt: "eaton park",
        src: eaton_park,
      },
    ],
  },
  {
    id: 2,
    name: "eco retreat long an",
    projectUrl: "/eco-retreat-long-an",
    developer: "ecopark group",
    location: "Long An",
    productType: "Căn hộ, Nhà phố, Biệt thự",
    area: "220 hecta",
    unitType: "Đang cập nhật",
    handover: "Đang cập nhật",
    owner: "Sở hữu lâu dài",
    status: "Đang thi công",
    type: "hot",
    description:
      "Eco Retreat Long An sở hữu vị trí kim cương. Nằm trên xã Thanh Phú, huyện bến lức, Tỉnh Long An. Dự án tọa lạc ngay giữa vành đai 3 và 4. Đặc biệt, dự án còn sở hữu vị trí kết nối thương mại giữa các cụm khu công nghiệp – Cơ sở hạ tầng đang được tỉnh Long An gấp rút đầu tư đồng bộ.",

    images: [
      {
        alt: "haus dalat phoi canh 1",
        src: ecoretreat_longan,
      },
    ],
  },
  {
    id: 3,
    name: "haus da lat",
    projectUrl: "/haus-dalat",
    developer: "the one destination",
    location: "Đà Lạt",
    productType: "Căn hộ",
    area: "5 hecta",
    unitType: "Đang cập nhật",
    handover: "Đang cập nhật",
    owner: "Sở hữu lâu dài",
    status: "Đang thi công",
    type: "hot",
    description:
      "Haus Da Lat có quy mô 5ha, nằm giữa trung tâm TP Đà Lạt, trước mặt hồ Xuân Hương bao gồm khu căn hộ cao cấp, trung tâm thương mại, khách sạn 5 sao thương hiệu quốc tế vận hành.",

    images: [
      {
        alt: "haus-dalat",
        src: haus_dalat,
      },
    ],
  },
  {
    id: 4,
    name: "elysian",
    projectUrl: "/elysian-gamuda-land",
    developer: "gamuda land",
    location: "TP. Thủ Đức, TP.HCM",
    productType: "Căn hộ",
    area: "28,412 m2",
    unitType: "36 - 115 m2",
    handover: "Hoàn thiện cơ bản",
    owner: "Sở hữu lâu dài",
    status: "Đang thi công phần thân",
    type: "hot",
    description:
      "Elysian là một dự án bất động sản độc đáo, tọa lạc giữa khu rừng đô thị sinh thái, với thiết kế Biophilic đầy cảm hứng, Elysian By Gamuda Land tạo ra một môi trường sống bền vững và thân thiện với thiên nhiên. Tại đây, không gian được thiết kế để tối đa hóa tính kết nối, kết hợp tiện nghi hiện đại và sự yên bình.",
    images: [
      {
        alt: "can ho elysian",
        src: elysian,
      },
    ],
  },
  {
    id: 5,
    name: "celesta heights",
    projectUrl: "/celesta-heights",
    developer: "keppel land",
    location: "Nguyễn Hữu Thọ, TP.HCM",
    productType: "Căn hộ, Shophouse",
    area: "2,1 hecta",
    unitType: "50 - 116 m2",
    handover: "Thô | Hoàn thiện cơ bản",
    owner: "Sở hữu lâu dài",
    status: "Đang thi công",
    type: "hot",
    description:
      "Celesta Heights sở hữu vị trí đắc địa bậc nhất Nam Sài Gòn. Celesta Heights nằm trên mặt tiền đường Nguyễn Hữu Thọ, liền kề khu đô thị quốc tế Phú Mỹ Hưng và Zeitgeist Nhà Bè. ",

    images: [
      {
        alt: "celesta heights",
        src: celesta_heightd,
      },
    ],
  },
  {
    id: 6,
    name: "celesta gold",
    projectUrl: "/celesta-gold",
    developer: "keppel land",
    location: "Nguyễn Hữu Thọ, TP.HCM",
    productType: "Căn hộ, Shophouse",
    area: "2,1 hecta",
    unitType: "Đang cập nhật",
    handover: "Thô | Hoàn thiện cơ bản",
    owner: "Sở hữu lâu dài",
    status: "Đang thi công",
    type: "hot",
    description:
      "Celesta Gold liền kề khu đô thị quốc tế Phú Mỹ Hưng và Zeitgeist Nhà Bè, là dự án được phát triển sau sự thành công của hàng loạt dự án mà Keppel Land đã triển khai như: Celesta Rise và Celesta Heights.",

    images: [
      {
        alt: "celesta gold",
        src: celesta_gold,
      },
    ],
  },
  {
    id: 7,
    name: "celesta rise",
    projectUrl: "/celesta-rise",
    developer: "keppel land",
    productType: "Căn hộ, Shophouse",
    area: "2,8 hecta",
    unitType: "49 - 106 m2",
    handover: "Thô | Hoàn thiện cơ bản",
    owner: "Sở hữu lâu dài",
    status: "Đã hoàn thiện",
    type: "hot",
    description:
      "Celesta Rise là dự án thành phần với diện tích 2,8 hecta tọa lạc trong khu dự án căn hộ cao cấp CELESTA có tổng diện tích 6,2 hecta tại Nam Sài Gòn. Celesta Rise là giai đoạn đầu tiên, bao gồm 923 căn hộ cao cấp trải dài trong 5 tòa tháp với tiện ích đa dạng phù hợp cho mọi lứa tuổi.",
    location: "Nguyễn Hữu Thọ, TP.HCM",
    images: [
      {
        alt: "celesta rise",
        src: celesta_rise,
      },
    ],
  },
  {
    id: 8,
    name: "celesta rise",
    projectUrl: "/celesta-rise",
    developer: "keppel land",
    productType: "Căn hộ, Shophouse",
    area: "2,8 hecta",
    unitType: "49 - 106 m2",
    handover: "Thô | Hoàn thiện cơ bản",
    owner: "Sở hữu lâu dài",
    status: "Đã hoàn thiện",
    type: "hot",
    description:
      "Celesta Rise là dự án thành phần với diện tích 2,8 hecta tọa lạc trong khu dự án căn hộ cao cấp CELESTA có tổng diện tích 6,2 hecta tại Nam Sài Gòn. Celesta Rise là giai đoạn đầu tiên, bao gồm 923 căn hộ cao cấp trải dài trong 5 tòa tháp với tiện ích đa dạng phù hợp cho mọi lứa tuổi.",
    location: "Nguyễn Hữu Thọ, TP.HCM",
    images: [
      {
        alt: "celesta rise",
        src: celesta_rise,
      },
    ],
  },
  {
    id: 9,
    name: "celesta rise",
    projectUrl: "/celesta-rise",
    developer: "keppel land",
    productType: "Căn hộ, Shophouse",
    area: "2,8 hecta",
    unitType: "49 - 106 m2",
    handover: "Thô | Hoàn thiện cơ bản",
    owner: "Sở hữu lâu dài",
    status: "Đã hoàn thiện",
    type: "hot",
    description:
      "Celesta Rise là dự án thành phần với diện tích 2,8 hecta tọa lạc trong khu dự án căn hộ cao cấp CELESTA có tổng diện tích 6,2 hecta tại Nam Sài Gòn. Celesta Rise là giai đoạn đầu tiên, bao gồm 923 căn hộ cao cấp trải dài trong 5 tòa tháp với tiện ích đa dạng phù hợp cho mọi lứa tuổi.",
    location: "Nguyễn Hữu Thọ, TP.HCM",
    images: [
      {
        alt: "celesta rise",
        src: celesta_rise,
      },
    ],
  },
];
