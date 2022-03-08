export const listOfCardsData: Array<CardObjectDisplay> = [
  {
    cardImageUrl: 'https://source.unsplash.com/600x400/?computer',
    editorProfileImageUrl: 'assets/images/profiles/profile1.jpg',
    tagLabel: 'Technology',
    cardBodyTitle: "What's new in 2022 Tech",
    cardContent:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
    editorName: 'Benyakoub Mohammed',
    timeOfEdit: '2h ago',
  },
  {
    cardImageUrl: 'https://source.unsplash.com/600x400/?food',
    editorProfileImageUrl: 'assets/images/profiles/profile2.jpg',
    tagLabel: 'Food',
    cardBodyTitle: 'Delicious Food',
    cardContent:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
    editorName: 'Brahim Arkni',
    timeOfEdit: 'Yesterday',
  },
  {
    cardImageUrl: 'https://source.unsplash.com/600x400/?car,automobile',
    editorProfileImageUrl: 'assets/images/profiles/profile3.jpg',
    tagLabel: 'Automobile',
    cardBodyTitle: 'Race to your heart content',
    cardContent:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
    editorName: 'Anis',
    timeOfEdit: '2d ago',
  },
];

  export interface CardObjectDisplay {
    cardImageUrl: string; // card img src
    editorProfileImageUrl: string; // img src
    tagLabel: string; // tag
    cardBodyTitle: string; // h4
    cardContent: string; // p
    editorName: string; // card-footer > h5
    timeOfEdit: string; // hours
  }