export default async function Category({params} : {params: Promise<{category: string}>}){
    const props = await params
    console.log(props)
    return (
        <div>
            It is a specific cateogory page. Specifically, it is <strong>{props.category}</strong>
        </div>
    )
}