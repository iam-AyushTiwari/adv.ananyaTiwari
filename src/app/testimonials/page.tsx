import cn from "classnames";
import Marquee from "@/components/ui/marquee";
import PageInfoBar from "@/components/PageInfoBar";
import { FaArrowRight, FaForward } from "react-icons/fa6";

const reviews = [
  {
    name: "Rahul",
    username: "@rahul",
    body: "Advocate Ananya is the best lawyer I've ever met. She is very professional and helped me win my case.",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Ria",
    username: "@ria",
    body: "I was in a very tough situation and Advocate Ananya helped me out. She is very knowledgeable and supportive.",
    img: "https://avatar.vercel.sh/ria",
  },
  {
    name: "Raj",
    username: "@raj",
    body: "Advocate Ananya is the best advocate for any legal issue. She is very experienced and easy to communicate with.",
    img: "https://avatar.vercel.sh/raj",
  },
  {
    name: "Rashmi",
    username: "@rashmi",
    body: "I was very nervous about my case, but Advocate Ananya helped me feel at ease. She is very kind and understanding.",
    img: "https://avatar.vercel.sh/rashmi",
  },
  {
    name: "Rohan",
    username: "@rohan",
    body: "Advocate Ananya is the best lawyer for any legal issue. She is very professional and helpful.",
    img: "https://avatar.vercel.sh/rohan",
  },
  {
    name: "Roshni",
    username: "@roshni",
    body: "I was in a very difficult situation and Advocate Ananya helped me out. She is very knowledgeable and supportive.",
    img: "https://avatar.vercel.sh/roshni",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const page = () => {
  return (
    <>
      <PageInfoBar name="Testimonials" />
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        <div className="flex items-center justify-center mt-8">
          <button className="bg-black/80 flex items-center gap-4 hover:bg-black/90 text-white font-semibold py-2 px-20 rounded-full transition duration-300 ease-in-out">
            Give Feedback
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
