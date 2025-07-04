import { IconButton, Tooltip } from "@mui/material";

export default function Hotline() {
  return (
    <>
      <Tooltip title="Liên hệ tư vấn">
        <IconButton
          href="tel:0909751772"
          className="my-4 bg-slate-100 p-3 flex justify-end blinking-text md:hidden"
          color="success"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
            className="text-green-700"
          >
            <path
              fill="currentColor"
              d="m16.052 1.787l.966.261a7 7 0 0 1 4.93 4.934l.26.965l-1.93.521l-.261-.965a5 5 0 0 0-3.522-3.524l-.965-.262zM1 2h8.58l1.487 6.69l-1.86 1.86a14.1 14.1 0 0 0 4.243 4.242l1.86-1.859L22 14.42V23h-1a19.9 19.9 0 0 1-10.85-3.196a20.1 20.1 0 0 1-5.954-5.954A19.9 19.9 0 0 1 1 3zm2.027 2a17.9 17.9 0 0 0 2.849 8.764a18.1 18.1 0 0 0 5.36 5.36A17.9 17.9 0 0 0 20 20.973v-4.949l-4.053-.9l-2.174 2.175l-.663-.377a16.07 16.07 0 0 1-6.032-6.032l-.377-.663l2.175-2.174L7.976 4zm12.111 1.165l.966.261a3.5 3.5 0 0 1 2.465 2.467l.26.965l-1.93.521l-.261-.965a1.5 1.5 0 0 0-1.057-1.057l-.965-.261z"
            ></path>
          </svg>
        </IconButton>
      </Tooltip>
    </>
  );
}
