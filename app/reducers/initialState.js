export const initialState = [
  {
    id: Math.random().toString(36).substr(-8),
    title: 'React',
    imageUrl: "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/01/1505804164react-universal-blog.jpg",
    points: 0,
    questions: [
      {
        question: 'What is React?',
        answer: 'A JS framework created by Facebook Team to to build UI'
      },
      {
        question: 'What company invented React?',
        answer: 'Facebook'
      },
      {
        question: 'How is React different compare to Wordpress?',
        answer: 'React is used JavaScript while Worldpress used PHP.'
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(-8),
    title: 'Redux',
    imageUrl: "http://blog.rangle.io/content/images/2016/05/ngRedux.png",
    points: 0,
    questions: [
      {
        question: 'What is Redux?',
        answer: 'Redux is the way to handle state management for complex apps'
      },
      {
        question: 'When should Redux be used with React?',
        answer: 'When state is not ephemeral within each component and kept/shared among few components'
      },
      {
        question: 'Who invented Redux?',
        answer: 'Dan Abramov from Facebook'
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(-8),
    title: 'React Native',
    imageUrl: "https://www.mobiloud.com/blog/wp-content/uploads/2016/12/xnative-web-hybrid-mobile-apps-740x493.jpeg.pagespeed.ic.Fs1HUCknL5.jpg",
    points: 0,
    questions: [
      {
        question: 'What is React Native?',
        answer: 'React developers are not React Native developers by default'
      },
      {
        question: 'Will my React Native app work on Web?',
        answer: 'Unfortunately, no 😢'
      }
    ]
  },
]
