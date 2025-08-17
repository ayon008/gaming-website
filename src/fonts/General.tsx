import localFont from "next/font/local";

const General = localFont({
  src: [
    {
      path: "../../public/fonts/general.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
export default General;
