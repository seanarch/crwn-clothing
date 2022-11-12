import './directory-item.styles.jsx'
import { DirectoryItemContainer, Body } from './directory-item.styles.jsx'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <DirectoryItemContainer>
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem 