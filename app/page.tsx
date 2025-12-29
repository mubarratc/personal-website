import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Mahdin Choudhury
      </h1>
      <p className="mb-4">
        {`Currently the Founder and CEO of CharityStack. Previously a PM at Apple that worked on Applied AI applications across the Siri and Messages teams. At my core I'm a product builder, and hope to build real impact.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
