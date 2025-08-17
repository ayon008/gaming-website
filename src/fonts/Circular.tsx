import localFont from "next/font/local";

const Circular = localFont({
  src: [
    {
      path: "../../public/fonts/circularweb-book.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
export default Circular;
