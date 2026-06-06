import StoryCard from "./StoryCard"
import Story from "./Story"
export default function StorySection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">


        <div
  className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-8
  "
>
  {Story.map((story, index) => (
    <div
      key={story.id}
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-duration="1000"
    >
      <StoryCard {...story} />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}