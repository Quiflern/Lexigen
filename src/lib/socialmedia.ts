import { FaYoutube, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

import { FaThreads, FaXTwitter } from "react-icons/fa6";

import { SiYoutubeshorts } from "react-icons/si";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

// Define an array of social media tools with their configurations and prompts
// Each tool includes properties such as name, description, category, icon, AI prompt, slug, and form fields.
export const socialmedia = [
  {
    name: "Facebook Post Ideas",
    desc: "A tool that creates Facebook post ideas tailored to your niche and outline using AI.",
    category: "Facebook",
    icon: FaFacebookF,
    aiPrompt:
      "Generate Facebook post ideas based on the given niche and outline topic. Present the results in Rich Text Editor format.",
    slug: "facebook-post-idea",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Captions",
    desc: "An AI tool that crafts Instagram captions based on your post's niche and outline.",
    category: "Instagram",
    icon: FaInstagram,
    aiPrompt:
      "Provide some engaging examples of Instagram captions based on the niche and outline topic. Present the results in Rich Text Editor format.",
    slug: "instagram-caption",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Hashtags",
    desc: "An AI tool that generates Instagram hashtags based on your post's niche and outline.",
    category: "Instagram",
    icon: FaInstagram,
    aiPrompt:
      "Provide some relevant examples of Instagram hashtags based on the given niche and outline topic. Present the results in Rich Text Editor format.",
    slug: "instagram-hashtags",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Linkedin Post",
    desc: "An AI tool that generates LinkedIn post ideas based on your post's niche and outline.",
    category: "Linkedin",
    icon: FaLinkedin,
    aiPrompt:
      "Provide some effective examples of LinkedIn post ideas based on the given niche and outline topic. Present the results in Rich Text Editor format.",
    slug: "likedin-post",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Pinterest Pins",
    desc: "An AI tool that generates Pinterest Pin ideas based on your niche and outline.",
    category: "Pinterest",
    icon: FaPinterest,
    aiPrompt:
      "Give me Pinterest Pin ideas on the given niche and outline topic. Provide results in Rich Text Editor format.",
    slug: "pinterest-pin-ideas",
    form: [
      {
        label: "Enter your pin niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter pin outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Tiktok Hashtags",
    desc: "An AI tool that generates TikTok topic ideas based on your post's niche and outline.",
    category: "Tiktok",
    icon: FaTiktok,
    aiPrompt:
      "Provide some relevant examples of Instagram hashtags based on the given niche and outline topic. Present the results in Rich Text Editor format.",
    slug: "tiktok-hashtags",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Threads Post",
    desc: "An AI tool that generates Threads posts based on your post's niche and outline.",
    category: "Threads",
    icon: FaThreads,
    aiPrompt:
      "Give me some good examples of Threads post on given niche & outline topic and give me result in Rich Text Editor format",
    slug: "threads-post",
    form: [
      {
        label: "Enter your post niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Tweet",
    desc: "An AI tool that generates tweet ideas based on your post's niche and outline.",
    category: "Twitter",
    icon: FaXTwitter,
    aiPrompt:
      "Give me 250 characters of tweet example on given niche & outline topic",
    slug: "tweets-post",
    form: [
      {
        label: "Enter your tweet niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter tweet outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Short Idea Generator",
    desc: "An AI tool that generates YouTube Shorts video ideas based on your niche and outline.",
    category: "Youtube",
    icon: SiYoutubeshorts,
    aiPrompt:
      "Give me YouTube Shorts video ideas on the given niche and outline topic. Provide results in Rich Text Editor format.",
    slug: "youtube-shorts-ideas",
    form: [
      {
        label: "Enter your video niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter video outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Video Description",
    desc: "An AI tool that generates YouTube video descriptions from your information.",
    category: "Youtube",
    icon: FaYoutube,
    aiPrompt:
      "Give me youtube video description ideas based on the provided video description outline and title and give me results in Rich Text Editor format.",
    slug: "youtube-description",
    form: [
      {
        label: "Youtube Video Description Title",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter Video Description Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Video Idea Generator",
    desc: "An AI tool that generates YouTube video ideas based on your niche and outline.",
    category: "Youtube",
    icon: FaYoutube,
    aiPrompt:
      "Give me YouTube video ideas on the given video niche and outline topic. Provide results in Rich Text Editor format.",
    slug: "youtube-video-ideas",
    form: [
      {
        label: "Enter your video niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter video outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Thumbnail Idea",
    desc: "An AI tool that generates YouTube thumbnails from your information.",
    category: "Youtube",
    icon: FaYoutube,
    aiPrompt:
      "Generate YouTube thumbnail ideas based on given video title and outline",
    slug: "thumbnail-idea",
    form: [
      {
        label: "Youtube Video Title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter Video Description Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];

export default socialmedia;
