import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Mahdin Choudhury
      </h1>
      <p className="mb-4">
        {`Founder & CEO of CharityStack, building payment, fundraising, and operational infrastructure for nonprofits. Former Product Manager at Apple, working on applied AI across Siri and Messages. I focus on first-principles product design, long-term systems, and software that compounds in real-world impact.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
