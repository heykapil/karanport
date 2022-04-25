export type CourseContent = {
  name: string;
  slug?: string;
  content?: CourseContent[];
};

export interface Course {
  title: string;
  slug: string;
  banner: string;
  description: string;
  content: CourseContent[];
}

export const courses: Course[] = [
  {
    title: `Let's learn Go`,
    slug: 'go',
    banner: '/static/courses/go/banner.png',
    description: `Let's master the fundamentals and advanced features of the Go programming language`,
    content: [
      {
        name: 'Getting Started',
        content: [
          {
            name: 'What is Go and why learn it?',
            slug: 'what-is-go-and-why-learn-go',
          },
        ],
      },
      {
        name: 'Chapter I',
        content: [
          { name: 'Hello world', slug: 'hello-world' },
          {
            name: 'Variables and Data Types',
            slug: 'variables-and-data-types',
          },
          { name: 'String Formatting', slug: 'flow-control' },
          { name: 'Flow Control', slug: 'flow-control' },
          { name: 'Functions', slug: 'functions' },
          { name: 'Modules', slug: 'modules' },
          { name: 'Workspaces', slug: 'workspaces' },
          { name: 'Packages', slug: 'packages' },
          { name: 'Useful Commands', slug: 'useful-commands' },
          { name: 'Build', slug: 'build' },
        ],
      },
      {
        name: 'Chapter II',
        content: [
          { name: 'Pointers', slug: 'pointers' },
          { name: 'Structs', slug: 'structs' },
          { name: 'Methods', slug: 'methods' },
          { name: 'Arrays and Slices', slug: 'arrays-and-slices' },
          { name: 'Maps', slug: 'maps' },
        ],
      },
      {
        name: 'Chapter III',
        content: [
          { name: 'Interfaces', slug: 'interfaces' },
          { name: 'Error Handling', slug: 'error-handling' },
          { name: 'Panic and Recover', slug: 'panic-and-recover' },
          { name: 'Testing', slug: 'testing' },
          { name: 'Generics', slug: 'generics' },
        ],
      },
      {
        name: 'Chapter IV',
        content: [
          { name: 'Concurrency', slug: 'concurrency' },
          { name: 'Goroutines', slug: 'goroutines' },
          { name: 'Channels', slug: 'channels' },
          { name: 'Select', slug: 'select' },
          { name: 'Waitgroups', slug: 'waitgroups' },
          { name: 'Mutexes', slug: 'mutexes' },
        ],
      },
      {
        name: 'Next Steps',
        slug: 'next-steps',
      },
    ],
  },
];
