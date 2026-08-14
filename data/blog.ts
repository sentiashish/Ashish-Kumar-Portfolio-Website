export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'two-sum-dsa-approach-cpp-python',
    title: 'Solving Two Sum: a simple DSA approach in C++ and Python',
    excerpt: 'A clear walkthrough of the Two Sum problem, the brute-force baseline, and the hash-map approach that reduces the time complexity to O(n).',
    date: '2026-08-14',
    content: `# Solving Two Sum: a simple DSA approach in C++ and Python

Two Sum is a useful starting point for practising Data Structures and Algorithms because it tests an important habit: before writing code, identify the repeated work in the straightforward solution.

## The problem

Given an array of integers and a target value, return the indices of two numbers whose sum equals the target.

For example, for **[2, 7, 11, 15]** and target **9**, the answer is indices **[0, 1]** because **2 + 7 = 9**.

## Start with the baseline

The direct approach checks every pair. It is easy to understand, but nested loops make its time complexity **O(n²)**.

## Improve it with a hash map

As I scan the array, I calculate the value needed to reach the target. If that value has already appeared, I have found the answer. Otherwise, I store the current number and its index for a later lookup.

This reduces the expected lookup time to O(1), making the overall approach **O(n)** time with **O(n)** extra space.

### C++

    #include <unordered_map>
    #include <vector>
    using namespace std;

    vector<int> twoSum(vector<int>& nums, int target) {
      unordered_map<int, int> seen;

      for (int i = 0; i < nums.size(); i++) {
        int needed = target - nums[i];
        if (seen.count(needed)) return {seen[needed], i};
        seen[nums[i]] = i;
      }

      return {};
    }

### Python

    def two_sum(nums, target):
        seen = {}

        for index, value in enumerate(nums):
            needed = target - value
            if needed in seen:
                return [seen[needed], index]
            seen[value] = index

        return []

## What I take from this problem

The important lesson is not memorising one solution. It is learning to ask: **what information can I store now so I do not need to search for it again later?** That pattern appears in many DSA problems.

I am currently strengthening my DSA practice by focusing on problem understanding, complexity analysis, and writing clean C++ and Python solutions.`
  },
  {
    slug: 'mern-and-aws-learning-path',
    title: 'My practical approach to learning MERN and AWS',
    excerpt: 'How I connect MERN fundamentals, SQL concepts, and AWS basics while learning to build practical software applications.',
    date: '2026-08-12',
    content: `# My practical approach to learning MERN and AWS

I am building my web-development foundation around the MERN stack and AWS. My goal is not to collect tools; it is to understand how the pieces of an application work together.

## Start with the user problem

Before thinking about pages or APIs, I start with a simple question: what should a user be able to do? A small, clear use case helps define the data, workflows, and interface without making the project unnecessarily complex.

## Build the application in layers

With MERN, I think of an application in connected layers:

- **MongoDB** for application data
- **Express and Node.js** for APIs and business logic
- **React** for the user interface

SQL is also an important part of my foundation because relational data modelling and query thinking are useful beyond one specific database.

## Treat AWS as part of the engineering workflow

I am learning AWS fundamentals to understand how applications and assets are hosted, stored, and delivered in a real environment. The focus is on making sensible decisions: keep deployments simple, protect credentials, and understand the cost and reliability trade-offs of the services being used.

## What I am practising

- Turning a requirement into small, implementable tasks
- Designing clear API and data flows
- Keeping database structure understandable
- Building interfaces around a user workflow
- Learning deployment and cloud fundamentals alongside development

The best way I have found to learn these concepts is to build small, complete applications and improve them step by step.`
  },
  {
    slug: 'currently-learning-dsa-and-ai',
    title: 'Currently learning: DSA and AI fundamentals',
    excerpt: 'The areas I am currently focusing on: stronger problem-solving through DSA and a careful introduction to AI fundamentals.',
    date: '2026-08-10',
    content: `# Currently learning: DSA and AI fundamentals

Right now, I am focusing on two areas that complement each other: Data Structures and Algorithms, and AI fundamentals.

## Data Structures and Algorithms

DSA improves how I reason about a problem before I write code. I am practising how to identify the right data structure, estimate time and space complexity, and compare a simple solution with a more efficient one.

My current focus includes arrays, strings, hash maps, stacks, queues, linked lists, trees, and common problem-solving patterns.

## AI fundamentals

I am also learning AI fundamentals with a practical mindset. My aim is to understand the basic ideas, terminology, and limitations before trying to use AI in an application.

For me, responsible learning means asking useful questions: what problem does AI actually solve here, what data or context does it need, and how should a user understand its output?

## Why I am learning both

DSA helps me build stronger logical foundations. AI introduces a new way to think about software capabilities. Learning both together helps me stay grounded in problem solving while exploring modern technology carefully.

I will keep updating this blog with notes from what I build and learn.`
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug)
}
