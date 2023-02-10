export default function sidebar() {
  return [
    {
      text: '1',
      items: [
        { text: '1.1数据结构研究', link: '../1/1.1' },
        { text: '1.2基本概念和术语', link: '../1/1.2' },
      ],
    },
    {
      text: '2',
      items: [
        { text: '2.1', link: '../2/2.1' },
        { text: '2.2', link: '../2/2.2' },
        { text: '2.3', link: '../2/2.3' },
        { text: '2.4', link: '../2/2.4' },
        {
          text: '2.5',
          link: '../2/2.5',
          items: [
            { text: '2.5.1', link: '../2/2.5.1' },
            { text: '2.5.2', link: '../2/2.5.2' },
          ],
        },
        { text: '2.6', link: '../2/2.6' },
      ],
    },
  ];
}
