import { rating } from "@material-tailwind/react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Rating from "../components/Rating";

export const navItems = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Featured Books",
    link: "#featured",
  },
  {
    id: 3,
    name: "Events",
    link: "#events",
  },
  {
    id: 4,
    name: "About",
    link: "#about",
  },
  {
    id: 5,
    name: "Testimonials",
    link: "#testimonials",
  },
];

export const events = [
  {
    id: 1,
    title: "Book Signing",
    date: "Oct 25",
    time: "10:00 AM",
    by: "Stefan Stefancik",
    desc: "An exciting event where author Stefan Stefancik author of 'To the deep end' will be signing books for the first time.",
    image: "author.jpg",
  },
  {
    id: 2,
    title: "Arts & Crafts",
    date: "Oct 30",
    time: "10:00 AM",
    by: "Make creative book cover.",
    desc: "A get together for book lovers to create their own unique book covers for their favorite books.",
    image: "artandcrafts.jpg",
  },
  {
    id: 3,
    title: "Book Club Meeting",
    date: "Dec 3",
    time: "10:00 AM",
    by: "Book Club",
    desc: "A meeting for book lovers to discuss their favorite books and share their thoughts.",
    image: "bookClub.jpg",
  },
  {
    id: 4,
    title: "Book Signing",
    date: "Dec 15",
    time: "10:00 AM",
    by: "Nesrya",
    desc: "An exciting event where author Nesrya author of 'The Classic' will be signing books for the first time.",
    image: "author2.jpg",
  },
];

export const socials = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/nesrya.bookstore",
    icon: <Facebook />,
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/nesrya.bookstore",
    icon: <Instagram />,
  },
  {
    id: 3,
    name: "Youtube",
    link: "https://www.twitter.com/nesrya.bookstore",
    icon: <Youtube />,
  },
];

export const featuredBooks = [
  {
    id: 1,
    title: "The Art of War",
    author: "Sun Tzu",
    desc: "Delve into the timeless wisdom of Sun Tzu's The Art of War, a foundational text on strategy, tactics, and warfare. Written in ancient China, this classic has transcended its military origins to influence leaders in business, politics, and beyond. Sun Tzu emphasizes the importance of strategy, adaptability, and understanding one's opponent, making this essential reading for those seeking success in any competitive arena.",
    image: "artofwar.avif",
  },
  {
    id: 2,
    title: "The Hating Game",
    author: "Sally Thorne",
    desc: "Get ready for a delightful enemies-to-lovers romance in The Hating Game by Sally Thorne. Lucy and Joshua, coworkers at a publishing company, are locked in a battle of wits and rivalry. As their antics escalate, so does the tension between them, revealing deeper feelings that neither expected. This witty and charming novel is perfect for fans of romantic comedy, filled with sharp dialogue and relatable characters that will keep you laughing and rooting for love",
    image: "thehatinggame.jpeg",
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Héctor García",
    desc: "Explore the Japanese concept of Ikigai—the reason for being—in this enlightening book by Héctor García. Ikigai combines philosophy and practical advice to help readers discover their purpose in life, blending passion, talent, and what the world needs. Through engaging stories and insights from the people of Okinawa, known for their longevity, García guides you on a journey to find fulfillment and happiness, making this a must-read for anyone seeking a more meaningful life.",
    image: "Ikigai.jpeg",
  },
  {
    id: 4,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    desc: "In a world obsessed with positivity, Mark Manson's The Subtle Art of Not Giving a Fck* offers a refreshing counter-narrative. Manson argues that life's struggles give it meaning, and embracing challenges is key to personal growth. With humor and candor, he encourages readers to focus on what truly matters and to let go of societal expectations. This no-nonsense guide is perfect for those seeking a more honest and impactful approach to living a fulfilling life.",
    image: "subtleart.jpg",
  },
];

("AIzaSyB7-diXVwUqhYDXs605I4JaqUxd7XauzhM");

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    image: "sarah.jpg",
    quote: "A True Gem!",
    desc: "“[Your Bookstore Name] has quickly become my favorite place! The cozy atmosphere and friendly staff make every visit a joy. I love attending the book club meetings; they inspire me to read outside my usual genres. Plus, the author signings are a fantastic way to connect with the literary community!”",
    rating: <Rating />,
  },
  {
    id: 2,
    name: "David R.",
    image: "david.jpg",
    quote: "More than Just a Bookstore",
    desc: "“This isn’t just a bookstore; it’s a community hub! I’ve met so many wonderful people through the events here, from craft nights to book discussions. Every time I walk in, I feel welcomed and inspired. I can’t recommend it enough!”",
    rating: <Rating />,
  },
  {
    id: 3,
    name: "John T.",
    image: "john.jpg",
    quote: "A Family Favorite",
    desc: "“Our family loves [Your Bookstore Name]! The kids’ craft events are a highlight of our month, and it’s so lovely to see them excited about reading. The staff is always helpful in recommending great books for all ages. We feel right at home every time we visit!”",
    rating: <Rating />,
  },
];
