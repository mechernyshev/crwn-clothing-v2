import './directory.styles.scss'
import DirectoryItem from "../directory-item/directory-item.component";

const Categories = ({categories}) => {
    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category}/>
            ))}
        </div>
    )
}

export default Categories
