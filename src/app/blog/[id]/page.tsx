export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
    const props = await params
    return (
        <div>
            It is a blog post that is numbered <strong>{props.id}</strong>
        </div>
    )
}