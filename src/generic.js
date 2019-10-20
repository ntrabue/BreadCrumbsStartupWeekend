import moment from "moment";

const data = [
  {
    id: 1,
    title: "Cool Lake",
    date: moment().subtract(8, "days"),
    descritpion: "Wow, isn't this a neat lake?",
    letter: "A",
    photo:
      "https://images.unsplash.com/photo-1520050735087-1ed65d9b0273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    pinned: true
  },
  {
    id: 2,
    title: "Neat Sign",
    date: moment().subtract(12, "days"),
    description: "How neat is that? That's pretty neat.",
    letter: "B",
    photo:
      "https://images.unsplash.com/photo-1548966595-d87fccfc8a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    pinned: false
  },
  {
    id: 3,
    date: moment().subtract(16, "days"),
    title: "Mountain Road",
    description: "WOAAAAAH look at this mountain road!",
    letter: "C",
    photo:
      "https://images.unsplash.com/photo-1547244691-fc0b94515b69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    pinned: true
  },
  {
    id: 4,
    date: moment().subtract(3, "days"),
    title: "Beautiful Landscape",
    description:
      "If you can find a more beautiful mountain landscape, send it my way",
    letter: "D",
    photo:
      "https://images.unsplash.com/photo-1530162690600-8e5e742151e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    pinned: false
  },
  {
    id: 5,
    date: moment().subtract(2, "days"),
    title: "Snowy Peak",
    description: "Now that is a snowy peak!",
    letter: "E",
    photo:
      "https://images.unsplash.com/photo-1500516993418-227861b851d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    pinned: false
  },
  {
    id: 6,
    date: moment().subtract(14, "days"),
    title: "Way Down Here",
    description: "We're pretty far down here aren't we?",
    letter: "F",
    photo:
      "https://images.unsplash.com/photo-1481901508985-33c611353a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    pinned: true
  },
  {
    id: 7,
    date: moment().subtract(22, "days"),
    title: "Another Lake",
    description:
      "Here's an additional lake. Well, I mean it's the same photo as the first lake but whateves.",
    letter: "G",
    photo:
      "https://images.unsplash.com/photo-1520050735087-1ed65d9b0273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    pinned: false
  }
];

export default data;
