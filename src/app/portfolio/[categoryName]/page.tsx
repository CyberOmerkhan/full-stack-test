export default async function Category({params} : {params: Promise<{categoryName: string}>}){
    const props = await params
    console.log(props)
    return (
        <div>
            It is a specific cateogory page. Specifically, it is <strong>{props.categoryName}</strong>
        </div>
    )
}