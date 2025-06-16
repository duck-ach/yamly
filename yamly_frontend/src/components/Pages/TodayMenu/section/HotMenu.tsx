import { Swiper, SwiperSlide } from "swiper/react";

const HotMenu = () => {
  // DB에서 가져올 이미지
  const imgList = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  const maxVisible = 5;

  return (
    <>
      <h2 className="text-3xl font-bold mb-4">실시간 인기 메뉴 🔥</h2>
      <div>
        {imgList.length <= maxVisible ? (
          // 그냥 가로로 나열
          <div className="flex gap-2 overflow-x-auto">
            {imgList.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`img-${idx}`}
                className="w-32 h-32 object-cover rounded"
              />
            ))}
          </div>
        ) : (
          // 슬라이드로 보여주기
          <Swiper spaceBetween={10} slidesPerView={maxVisible}>
            {imgList.map((url, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={url}
                  alt={`img-${idx}`}
                  className="w-32 h-32 object-cover rounded"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
};

export default HotMenu;
