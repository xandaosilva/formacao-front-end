type Props = {
    title: string,
    content: string,
    commentsQty: number,
    tags: string[],
    category: Category
}

export enum Category{
    JS = "JavaScript",
    TS = "TypeScript",
    PY = "Python",
}

const Destructuring = ({ title, content, commentsQty, tags, category }: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Comentários: ({commentsQty})</p>
        <div>
            {tags.map((tag) => (
                <p key={tag}># - {tag}</p>
            ))}
        </div>
        <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destructuring