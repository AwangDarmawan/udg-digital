import GalleryImage from "./GalleryImage";
import Poto1 from "../../assets/1.png"
import Poto2 from "../../assets/2.png"
import Poto3 from "../../assets/3.png"
import Poto4 from "../../assets/4.png"
export default function Gallery() {
  const photos = [
    Poto1,Poto2,Poto3,Poto4
  ];

  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-6xl">
      <h2  data-aos="zoom-in" className="text-5xl md:text-5xl font-bold mb-10 font-netflix text-white" >
         GALLERY 
        </h2>

        <div className="space-y-4">
          {Array.from(
            { length: Math.ceil(photos.length / 3) },
            (_, index) => {
              const start = index * 3;

              return (
                <div
                  key={index}
                  className="space-y-4"
                   data-aos="fade-up"
                >
                  {/* Foto Besar */}
                  {photos[start] && (
                    <GalleryImage
                      src={photos[start]}
                      alt={`Gallery ${start + 1}`}
                      data-aos="zoom-in-up"
                      className="aspect-[16/9]"
                    />
                  )}

                  {/* Dua Foto */}
                  <div className="grid grid-cols-2 gap-4">
                    {photos[start + 1] && (
                      <GalleryImage
                        src={photos[start + 1]}
                        alt={`Gallery ${start + 2}`}
                        data-aos="fade-down-right"
                        className="aspect-square"
                      />
                    )}

                    {photos[start + 2] && (
                      <GalleryImage
                        src={photos[start + 2]}
                        alt={`Gallery ${start + 3}`}
                           data-aos="fade-down-left"
                        className="aspect-square"
                      />
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}