import eaton_park from "../assets/images/eaton_park/model_housing.jpg";
import haus_dalat from "../assets/images/haus_dalat/haus_dalat.png";
import ecoretreat_longan from "../assets/images/eco_retreat/Ecoretreat_Longan_Landscape.jpg";
import celesta_rise from "../assets/images/celesta/celesta_rise.jpg";
import celesta_heightd from "../assets/images/celesta/celesta_heights.webp";
import celesta_gold from "../assets/images/celesta/celesta_rise.jpg";

export const navLinks = [
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

export const projects = [
  {
    id: 1,
    name: "eaton park",
    developer: "gamuda land",
    type: "hot",
    description:
      "Eaton Park là một dự án căn hộ cao cấp tọa lạc tại vị trí đắc địa ngay mặt tiền đường Mai Chí Thọ, được phát triển bởi Gamuda Land – một trong những tập đoàn bất động sản hàng đầu Việt Nam, Eaton Park hứa hẹn mang lại một phong cách sống sang trọng, hiện đại và giao hòa với thiên nhiên.",
    location: "Mai Chí Thọ, TP.HCM",
    images: [
      {
        alt: "eaton park",
        src: eaton_park,
      },
    ],
    projectUrl: "/eaton-park",
  },
  {
    id: 2,
    name: "eco retreat long an",
    developer: "ecopark group",
    type: "hot",
    description:
      "Eco Retreat Long An sở hữu vị trí kim cương. Nằm trên xã Thanh Phú, huyện bến lức, Tỉnh Long An. Dự án tọa lạc ngay giữa vành đai 3 và 4. Đặc biệt, dự án còn sở hữu vị trí kết nối thương mại giữa các cụm khu công nghiệp – Cơ sở hạ tầng đang được tỉnh Long An gấp rút đầu tư đồng bộ.",
    location: "Long An",
    images: [
      {
        alt: "haus dalat phoi canh 1",
        src: ecoretreat_longan,
      },
    ],
    projectUrl: "/eco-retreat-long-an",
  },
  {
    id: 3,
    name: "haus da lat",
    developer: "the one destination",
    type: "hot",
    description:
      "Haus Da Lat có quy mô 5ha, nằm giữa trung tâm TP Đà Lạt, trước mặt hồ Xuân Hương bao gồm khu căn hộ cao cấp, trung tâm thương mại, khách sạn 5 sao thương hiệu quốc tế vận hành.",
    location: "Đà Lạt",
    images: [
      {
        alt: "haus-dalat",
        src: haus_dalat,
      },
    ],
    projectUrl: "/haus-dalat",
  },
  {
    id: 5,
    name: "celesta heights",
    developer: "keppel land",
    type: "hot",
    description:
      "Celesta Heights sở hữu vị trí đắc địa bậc nhất Nam Sài Gòn. Celesta Heights nằm trên mặt tiền đường Nguyễn Hữu Thọ, liền kề khu đô thị quốc tế Phú Mỹ Hưng và Zeitgeist Nhà Bè. ",
    location: "Nguyễn Hữu Thọ, TP.HCM",
    images: [
      {
        alt: "celesta heights",
        src: celesta_heightd,
      },
    ],
    projectUrl: "/celesta-heights",
  },
  {
    id: 6,
    name: "celesta gold",
    developer: "keppel land",
    type: "hot",
    description:
      "Celesta Gold là dự án được phát triển sauu sự thành công của hàng loạt dự án mà Keppel Land đã triển khai như: Celesta Rise và Celesta Heights.",
    location: "Nguyễn Hữu Thọ, TP.HCM",
    images: [
      {
        alt: "celesta gold",
        src: celesta_gold,
      },
    ],
    projectUrl: "/celesta-gold",
  },
  {
    id: 4,
    name: "celesta rise",
    developer: "keppel land",
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
    projectUrl: "/celesta-rise",
  },
];
