import RestaurantList from "@/components/blocks/RestaurantList";

const HomeLayout = () => {
  return (
    <>
      <div>Restaurant</div>
      <div>
        Ini adalah proyek yang saya buat saat mengikuti tes masuk di perusahaan
        terakhir. Saya menggunakan RapidAPI, namun mohon maaf karena saya
        menggunakan versi gratis, jadi batas maksimal request data hanya 50 kali
        per bulan. Anda bisa melihat kode sumber saya di:
        https://github.com/iqmalr/FrontendDevReactjs-1678689275_efca9bdbbf616539baea-Muhamad_Iqmal_Riffai
        .
      </div>
      <RestaurantList />
    </>
  );
};

export default HomeLayout;
