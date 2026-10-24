# How to add a blog post

Every blog post is one text file in this folder. The site picks it up automatically.

1. Create a new file in this folder. Name it with lowercase words and dashes, ending in `.md`.
   Example: `why-i-quit-my-job.md`. The file name becomes the web address:
   `yoursite.com/writing/why-i-quit-my-job`.
2. Put this block at the very top of the file (keep the three dashes):

   ```
   ---
   title: "Why I quit my job"
   date: "2026-11-02"
   summary: "One line on what the reader will get from this post."
   topic: "Life"
   readingTime: "4"
   ---
   ```

   - `title`: the headline.
   - `date`: year-month-day, like `2026-11-02`.
   - `summary`: one short line shown in the list.
   - `topic`: must be exactly one of `Business`, `Building with AI`, or `Life`.
   - `readingTime`: minutes as a number (`4` shows as "4 min read"), or any text you like.
3. Under the block, write your post. Use `## Heading` for headings, `**bold**` for bold,
   and a blank line between paragraphs.
4. Save, then publish the change (push to GitHub). Vercel updates the live site by itself.

This README file is ignored by the site. While this folder has no posts, the Writing page
shows "First post coming soon."
