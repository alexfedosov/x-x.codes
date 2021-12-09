import * as React from "react"
import styled from "styled-components"

const MainContainer = styled.div`
  margin-bottom: 48px;
`

const Container = styled.div`
    display: flex;
    flex-direction: horizontal;
  `

const Cover = styled.img`
    min-width: 150px;
    width: 150px;
    margin-right: 24px;
    align-self: flex-start;
    object-fit: contain;
  `

const BookDescription = styled.div`
    display: flex;
    flex-direction: column;
  `

const Links = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 24px;
    * { margin: 0 8px; };
`

const Author = styled.span`
  opacity: 0.4;
`

const Separator = styled.span`
  opacity: 0.1;
`

const Book = ({ title, author, cover, description, links }) => {
  return (
    <MainContainer>
      <h3>{title} <Separator>|</Separator> <Author>{author}</Author></h3>
      <Container>
        <Cover src={cover} />
        <BookDescription>
          {description}
          <Links>{links.map(link => <a key={link.url} href={link.url}>{link.resourceName}</a>)}</Links>
        </BookDescription>
      </Container>
    </MainContainer>
  )
}

export default Book